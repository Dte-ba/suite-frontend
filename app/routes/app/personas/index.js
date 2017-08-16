import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  obtenerPersonas: task(function*(query) {
    let data = yield this.store.query("perfil", query);
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  obtenerEstadisticas: task(function*() {
    let url = ENV.API_URL + "/api/perfiles/estadistica";
    let resultado = yield this.get("ajax").request(url);
    return resultado;
  }).drop(),

  model() {
    return Ember.RSVP.hash({
      estadisticas: this.get("obtenerEstadisticas").perform({}),
      tareaPersonas: this.get("obtenerPersonas"),
      columnas: [
        {
          atributo: "nombreCompleto",
          titulo: "Apellido y nombre",
          ruta: "app.personas.detalle"
        },
        {
          atributo: "region.numero",
          titulo: "Región"
        },
        {
          atributo: "cargo.nombre",
          titulo: "Cargo"
        },
        {
          atributo: "cuit",
          titulo: "CUIL/CUIT"
        },
        {
          atributo: "email",
          titulo: "Email"
        },
        {
          atributo: "telefonoCelular",
          titulo: "Celular"
        },
        {
          atributo: "contrato.nombre",
          titulo: "Contrato"
        },
        {
          atributo: "fechaDeIngreso",
          titulo: "Fecha de Ingreso",
        }
      ]
    });
  },

  actions: {
    crearUnUsuarioNuevo() {
      alert("asdasd");
    }
  }
});
