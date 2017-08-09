import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Route.extend({
  queryParams: {
    pagina: { replace: true, refreshModel: true },
    filtro: { replace: true }
  },

  obtenerValidaciones: task(function*(query) {
    let data = yield this.store.query("validacion", query);
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  model() {
    return Ember.RSVP.hash({
      tareaValidaciones: this.get("obtenerValidaciones"),
      columnas: [
        {
          atributo: "fechaDeAlta",
          titulo: "Pedido el"
        },
        {
          atributo: "",
          titulo: "Cantidad pedidas"
        },
        {
          atributo: "",
          titulo: "Cantidad validadas"
        },
        {
          atributo: "autor.nombreCompleto",
          titulo: "Pedida por",
          promesa: "autor"
        },
        {
          atributo: "estado.nombre",
          titulo: "Estado",
          promesa: "estado"
        },
        {
          atributo: "observaciones",
          titulo: "Observaciones",
        },
        {
          atributo: "escuela.nombre",
          titulo: "Escuela",
          ruta: "app.validaciones.detalle"
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
    });
  },

  actions: {
    alIngresarFiltro() {
      this.get("obtenerValidaciones").perform({});
    }
  }
});
