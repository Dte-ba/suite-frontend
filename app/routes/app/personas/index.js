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
          atributo: "nombre",
          titulo: "Nombre",
          ruta: "app.personas.detalle"
        },
        {
          atributo: "apellido",
          titulo: "Apellido",
          ruta: "app.personas.detalle"
        },
        {
          atributo: "dni",
          titulo: "DNI"
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
