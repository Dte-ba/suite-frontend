import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Component.extend({
  cargarArchivo(archivo) {
    return new Ember.RSVP.Promise((success /*, fail*/) => {
      let reader = new FileReader();

      reader.onload = function(e) {
        success({
          name: archivo.name,
          contenido: e.target.result
        });
      };

      reader.readAsDataURL(archivo);
    });
  },

  procesarLlave: task(function*(archivos) {
    let archivoProcesado = yield this.cargarArchivo(archivos[0]);
    this.get("cuandoTerminaDeSubir")(archivoProcesado);
    return archivoProcesado;
  }),

  actions: {
    upload(event) {
      this.get("procesarLlave").perform(event.target.files);
    }
  }
});
