import Ember from "ember";
import { task, timeout } from "ember-concurrency";

export default Ember.Component.extend({
  store: Ember.inject.service(),
  tagName: "",
  soloSuRegion: false,

  opcionTodas: Ember.Object.create({
    nombre: "Todas",
    id: ""
  }),

  region: Ember.computed.alias("parametros.region"),
  regionComoObjeto: Ember.computed("region", function() {
    if (this.get("region")) {
      return this.get("store").find("region", this.get("region"));
    } else {
      return this.get("opcionTodas");
    }
  }),

  tareaRegiones: task(function*() {
    let regiones = [this.get("opcionTodas")];

    yield timeout(500);

    let data = yield this.get("store").query("region", {
      page_size: 500
    });

    data.map(d => {
      regiones.pushObject(d);
    });

    return regiones;
  }).drop(),

  didInsertElement() {
    this.get("tareaRegiones").perform();
  },

  actions: {
    cuandoSeleccionaRegion(region) {
      this.get("accionCompleta")("region", region.get("id"));
    }
  }
});
