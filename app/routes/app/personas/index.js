import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Route.extend({
  obtenerPersonas: task(function*(query) {
    let data = yield this.store.query("perfil", query);
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  model() {
    return Ember.RSVP.hash({
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
          titulo: "Fecha de Ingreso"
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
