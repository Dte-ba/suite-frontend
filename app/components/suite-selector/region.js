import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Component.extend({
  store: Ember.inject.service(),

  permiteSeleccionarTodasLasRegiones: false,

  obtenerRegiones: task(function*() {
    let opciones = [];

    if (this.get("permiteSeleccionarTodasLasRegiones")) {
      opciones.pushObject(
        Ember.Object.create({
          nombre: "Todas las regiones",
          numero: ""
        })
      );
    }

    // Obtiene todas las regiones usando el paginador de la api.
    let data = yield this.get("store").query("region", {});
    let { pagination: { pages } } = data.get("meta");

    data.map(e => {
      opciones.pushObject(e);
    });

    for (let i = 2; i < pages + 1; i++) {
      data = yield this.get("store").query("region", { page: i });

      data.map(e => {
        opciones.pushObject(e);
      });
    }

    this.set("opciones", opciones);
    return opciones;
  }).drop(),

  didInsertElement() {
    this.get("obtenerRegiones").perform();
  }
});
