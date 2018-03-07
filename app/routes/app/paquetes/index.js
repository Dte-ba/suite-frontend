import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  requiere: "paquetes.listar",
  ajax: Ember.inject.service(),
  perfilService: Ember.inject.service("perfil"),

  obtenerPaquetes: task(function*() {
    let query = {};

    let model = this.modelFor(this.routeName);

    query.page = model.pagina;
    query.query = model.filtro;
    query.escuela__localidad__distrito__region__numero = Ember.get(
      model,
      "region.numero"
    );

    let data = yield this.store.query("paquete", query);
    let meta = data.get("meta");

    return { data, meta };
  }).drop(),

  obtenerEstadisticas: task(function*() {
    let url = ENV.API_URL + "/api/paquetes/estadistica";
    let resultado = yield this.get("ajax").request(url);
    return resultado;
  }).drop(),

  actualizar() {
    this.get("obtenerPaquetes").perform();
  },

  afterModel() {
    this.actualizar();
  },

  model() {
    let soloSuRegion = !this.get("perfilService").tienePermiso("perfil.global");
    let regionPreSeleccionada = null;

    if (soloSuRegion) {
      regionPreSeleccionada = this.get("perfilService").obtenerRegion();
    } else {
      regionPreSeleccionada = Ember.Object.create({
        nombre: "Todas las regiones",
        numero: ""
      });
    }

    return {
      pagina: 1,
      filtro: "",
      deshabilitarSeleccionDeRegion: soloSuRegion,

      region: regionPreSeleccionada,

      estadisticas: this.get("obtenerEstadisticas").perform({}),
      tareaPaquetes: this.get("obtenerPaquetes"),
      columnas: [
        {
          titulo: "CUE",
          componente: "suite-detalle/cue"
        },
        {
          atributo: "escuela.localidad.distrito.region.numero",
          titulo: "Región",
          promesa: "escuela"
        },
        {
          atributo: "escuela.localidad.distrito.nombre",
          titulo: "Distrito",
          promesa: "escuela.localidad.distrito"
        },
        {
          atributo: "escuela.piso.serie",
          titulo: "Nº de Serie servidor",
          promesa: "escuela"
        },
        {
          atributo: "idhardware_ma",
          titulo: "ID de hardware (MA)"
        },
        {
          atributo: "ne",
          titulo: "NE"
        },
        {
          atributo: "fechaPedido",
          titulo: "Pedido",
          fecha: true
        },
        {
          atributo: "fechaEnvio",
          titulo: "Enviado",
          fecha: true
        },
        {
          titulo: "Estado",
          componente: "suite-detalle/estado-de-paquete"
        },
        {
          titulo: "Bajar",
          componente: "suite-detalle/zip-paquete"
        },
        {
          atributo: "comentario",
          titulo: "Comentarios"
        }
        // {
        //   atributo: "id",
        //   titulo: "ID"
        // }
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
    // crearUnPaqueteNuevo() {
    //   return this.transitionTo("app.paquetes.crear");
    // },
    crearPaquetesMasivos() {
      return this.transitionTo("app.paquetes.crearMasivo");
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
