import Ember from "ember";
import { task, timeout } from "ember-concurrency";

export default Ember.Component.extend({
  store: Ember.inject.service(),
  tagName: "",
  soloSuRegion: false,
  ultimaRegionSeleccionada: "",

  opcionTodos: Ember.Object.create({
    nombreApellido: "Todas las personas",
    id: ""
  }),

  responsableComoObjeto: Ember.computed("parametros.responsable", function() {
    if (this.get("parametros.responsable")) {
      return this.get("store").find(
        "perfil",
        this.get("parametros.responsable")
      );
    } else {
      return this.get("opcionTodos");
    }
  }),

  region: Ember.computed.alias("parametros.region"),

  cuandoCambiaDeRegion: Ember.observer("region", function() {
    if (this.get("ultimaRegionSeleccionada") != this.get("region")) {
      Ember.run.later(() => {
        this.set("ultimaRegionSeleccionada", this.get("region"));
        this.get("accionCompleta")("responsable", "");
        this.get("tarea").perform();
      }, 10);
    }

    /*
    */
  }),

  tarea: task(function*() {
    let personas = [this.get("opcionTodos")];
    let region = this.get("parametros.region");

    yield timeout(500);

    if (region) {
      let data = yield this.get("store").query("perfil", {
        activos: true,
        robotica: true,
        page_size: 500,
        region__id: region
      });

      data.map(d => {
        personas.pushObject(d);
      });
    } else {
      personas.pushObject({
        nombre: "Seleccione al menos una región para ver las personas.",
        disabled: true
      });
    }

    return personas;
  }).drop(),

  didInsertElement() {
    this.set("ultimaRegionSeleccionada", this.get("region"));
    this.get("tarea").perform();
  },

  actions: {
    cuandoSeleccionaResponsable(perfil) {
      this.get("accionCompleta")("responsable", perfil.get("id"));
    }
  }
});
