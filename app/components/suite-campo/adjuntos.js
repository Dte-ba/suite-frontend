import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Component.extend({
  cantidadDeArchivos: 0,
  archivosProcesados: 0,

  cargarImagen(archivo) {
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

  procesarImagenes: task(function*(archivos) {
    let imagenes = [];

    for (let i = 0; i < archivos.length; i++) {
      let imagen = yield this.cargarImagen(archivos[i]);
      imagenes.push(imagen);
    }

    this.get("cuandoTerminaDeSubir")(imagenes);

    return imagenes;
  }),

  actions: {
    upload(event) {
      this.get("procesarImagenes").perform(event.target.files);
    }
  }
});
