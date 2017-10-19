import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  requiere: "validaciones.listar",
  ajax: Ember.inject.service(),
  perfilService: Ember.inject.service("perfil"),

  obtenerValidaciones: task(function*() {
    let query = {};

    let model = this.modelFor(this.routeName);

    query.page = model.pagina;
    query.query = model.filtro;
    query.escuela__localidad__distrito__region__numero = Ember.get(
      model,
      "region.numero"
    );

    let data = yield this.store.query("validacion", query);
    let meta = data.get("meta");

    return { data, meta };
  }).drop(),

  obtenerEstadisticas: task(function*() {
    let url = ENV.API_URL + "/api/validaciones/estadistica";
    let resultado = yield this.get("ajax").request(url);
    return resultado;
  }).drop(),

  tareaExportarValidaciones: task(function*(inicio, fin, estado) {
    let i = inicio;
    let f = fin;

    let base = ENV.API_URL;
    let url = "";

    if (estado) {
      url = `${base}/api/validaciones/export?inicio=${i}&fin=${f}&estado=${estado}`;
    } else {
      url = `${base}/api/validaciones/export?inicio=${i}&fin=${f}`;
    }

    let data = yield this.get("ajax").raw(url, {
      dataType: "binary",
      xhrFields: {
        responseType: "blob"
      }
    });

    const blob_url = URL.createObjectURL(data.response);

    const dl = document.createElement("a");
    dl.href = blob_url;
    dl.download = "validaciones.xls";
    dl.click();

    URL.revokeObjectURL(blob_url);

    return data;
  }).drop(),

  actualizar() {
    this.get("obtenerValidaciones").perform();
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
      tareaValidaciones: this.get("obtenerValidaciones"),
      columnas: [
        {
          titulo: "Ver",
          componente: "suite-detalle/validaciones-acciones"
        },
        {
          atributo: "fechaDeAlta",
          titulo: "Pedido el",
          fecha: true
        },
        {
          atributo: "fechaDeModificacion",
          titulo: "Modificado el",
          fecha: true
        },
        {
          atributo: "cantidadPedidas",
          titulo: "Pedidas"
        },
        {
          atributo: "cantidadValidadas",
          titulo: "Validadas"
        },
        {
          titulo: "Pedida por",
          componente: "suite-detalle/autor"
        },
        {
          titulo: "Estado",
          componente: "suite-detalle/estado-de-validacion"
        },
        {
          atributo: "observaciones",
          titulo: "Observaciones"
        },
        {
          atributo: "escuela.nombre",
          titulo: "Escuela",
          promesa: "escuela",
          ruta: "app.escuelas.detalle"
        },
        {
          atributo: "escuela.cue",
          titulo: "CUE",
          promesa: "escuela"
        },
        {
          atributo: "escuela.localidad.distrito.region.numero",
          titulo: "Región",
          promesa: "escuela"
        },
        {
          atributo: "escuela.localidad.nombre",
          titulo: "Localidad",
          promesa: "escuela.localidad"
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
    crearUnaValidacionNueva() {
      return this.transitionTo("app.validaciones.crear");
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
    },
    exportarValidaciones() {
      let hoy = moment().format("YYYY-MM-DD");
      let inicio = hoy;
      let fin = hoy;
      let estado = "Aprobada";

      return this.get("tareaExportarValidaciones").perform(inicio, fin, estado);
    }
  }
});
