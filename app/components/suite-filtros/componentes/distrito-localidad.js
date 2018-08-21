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

  opcionTodos: Ember.Object.create({
    nombre: "Todos",
    id: ""
  }),

  distrito: Ember.computed.alias("parametros.distrito"),
  distritoComoObjeto: Ember.computed("distrito", function() {
    if (this.get("distrito")) {
      return this.get("store").find("distrito", this.get("distrito"));
    } else {
      return this.get("opcionTodos");
    }
  }),

  localidad: Ember.computed.alias("parametros.localidad"),
  localidadComoObjeto: Ember.computed("localidad", function() {
    if (this.get("localidad")) {
      return this.get("store").find("localidad", this.get("localidad"));
    } else {
      return this.get("opcionTodas");
    }
  }),

  region: Ember.computed.alias("parametros.region"),
  regionComoObjeto: Ember.computed("region", function() {
    if (this.get("region")) {
      return this.get("store").find("region", this.get("region"));
    } else {
      return this.get("opcionTodas");
    }
  }),

  noHaSeleccionadoDistrito: Ember.computed("parametros.distrito", function() {
    return !this.get("distrito");
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

  tareaDistritos: task(function*() {
    let distritos = [this.get("opcionTodos")];

    yield timeout(500);

    if (this.get("region")) {
      let data = yield this.get("store").query("distrito", {
        page_size: 500,
        region: this.get("region")
      });

      data.map(d => {
        distritos.pushObject(d);
      });
    } else {
      distritos.pushObject({
        nombre: "Seleccione región para ver más opciones.",
        disabled: true
      });
    }

    return distritos;
  }).drop(),

  tareaLocalidades: task(function*() {
    let localidades = [this.get("opcionTodas")];

    yield timeout(500);

    if (this.get("distrito")) {
      let data = yield this.get("store").query("localidad", {
        page_size: 500,
        distrito: this.get("distrito")
      });

      data.map(l => {
        localidades.pushObject(l);
      });
    } else {
      localidades.pushObject({
        nombre: "Seleccione distrito para ver más opciones.",
        disabled: true
      });
    }

    return localidades;
  }).drop(),

  didInsertElement() {
    this.get("tareaRegiones").perform();
    this.get("tareaDistritos").perform();
    this.get("tareaLocalidades").perform();
  },

  actions: {
    cuandoSeleccionaRegion(region) {
      this.get("accionCompleta")("region", region.get("id"));
      this.get("accionCompleta")("distrito", "");
      this.get("accionCompleta")("localidad", "");
      this.get("tareaDistritos").perform();
    },

    cuandoSeleccionaDistrito(distrito) {
      let id = distrito.get("id");

      this.get("accionCompleta")("distrito", id);
      this.get("accionCompleta")("localidad", "");
      this.get("tareaLocalidades").perform();
    },

    cuandoSeleccionaLocalidad(localidad) {
      this.get("accionCompleta")("localidad", localidad.get("id"));
    }
  }
});
