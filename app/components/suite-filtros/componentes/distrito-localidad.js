import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Component.extend({
  store: Ember.inject.service(),
  tagName: "",
  cargandoDistritos: true,
  distritos: null,

  tarea: task(function*() {
    this.set("cargandoDistritos", true);
    let data = yield this.get("store").query(this.get("distrito"), {
      page_size: 100
    });
    this.set("distritos", data);

    this.set("cargandoDistritos", false);
  }).drop(),

  didInsertElement() {
    this.get("tarea").perform();
  },

  actions: {
    cuandoSeleccionaDistrito(distrito) {},

    cuandoSeleccionaLocalidad(localidad) {}
  }
});
