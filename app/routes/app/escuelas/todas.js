import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  requiere: "escuelas.listar",
  ajax: Ember.inject.service(),
  perfilService: Ember.inject.service("perfil"),

  obtenerEscuelas: task(function*() {
    let query = {};

    let model = this.modelFor(this.routeName);

    // query.conformada = false;
    query.page = model.pagina;
    query.query = model.filtro;

    query.localidad__distrito__region__numero = Ember.get(
      model,
      "region.numero"
    );

    let data = yield this.store.query("escuela", query);
    let meta = data.get("meta");

    return { data, meta };
  }).drop(),

  obtenerEstadisticas: task(function*() {
    let url = ENV.API_URL + "/api/escuelas/estadistica";
    let resultado = yield this.get("ajax").request(url);
    return resultado;
  }).drop(),

  actualizar() {
    this.get("obtenerEscuelas").perform();
  },

  afterModel() {
    this.actualizar();
  },

  model() {
    let regionPreSeleccionada = Ember.Object.create({
      nombre: "Todas las regiones",
      numero: ""
    });

    return {
      estadisticas: this.get("obtenerEstadisticas").perform({}),
      tareaEscuelas: this.get("obtenerEscuelas"),

      /* valores a utilizar como filtros */
      pagina: 1,
      filtro: "",
      region: regionPreSeleccionada,

      columnas: [
        {
          atributo: "nombre",
          titulo: "Nombre",
          ruta: "app.escuelas.detalle"
        },
        {
          atributo: "cue",
          titulo: "CUE"
        },
        {
          atributo: "localidad.distrito.region.numero",
          titulo: "Región",
          promesa: "localidad.distrito.region"
        },
        {
          atributo: "localidad.nombre",
          titulo: "Localidad",
          promesa: "localidad"
        },
        {
          atributo: "localidad.distrito.nombre",
          titulo: "Distrito",
          promesa: "localidad.distrito"
        },
        {
          atributo: "modalidad.nombre",
          titulo: "Modalidad",
          promesa: "modalidad"
        },
        {
          atributo: "nivel.nombre",
          titulo: "Nivel",
          promesa: "nivel"
        },
        {
          atributo: "programas",
          titulo: "Programas",
          template: "suite-tabla/celda-programas"
        },
        {
          atributo: "piso.estado",
          titulo: "Piso",
          template: "suite-tabla/celda-pisos"
        },
        {
          atributo: "piso.llave",
          titulo: "Llave",
          template: "suite-tabla/celda-llave"
        },
        {
          atributo: "estadoDeEscuela",
          titulo: "",
          template: "suite-tabla/celda-estado-de-escuela"
        }
      ]
    };
  },

  actions: {
    alIngresarFiltro(valor) {
      let model = this.modelFor(this.routeName);
      Ember.set(model, "filtro", valor);
      Ember.set(model, "pagina", 1);
      this.actualizar();
    },
    crearUnaEscuelaNueva() {
      return this.transitionTo("app.escuelas.crear");
    },
    cuandoCambiaPagina(pagina) {
      let model = this.modelFor(this.routeName);
      Ember.set(model, "pagina", pagina);
      this.actualizar();
    },
    cuandoSeleccionaRegion(region) {
      let model = this.modelFor(this.routeName);
      Ember.set(model, "region", region);
      Ember.set(model, "pagina", 1);
      this.actualizar();
    }
  }
});
