import Ember from "ember";
import { task, timeout } from "ember-concurrency";

export default Ember.Component.extend({
  store: Ember.inject.service(),
  tagName: "",
  cargandoDistritos: true,
  distritos: [],
  localidades: [],

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

  noHaSeleccionadoDistrito: Ember.computed("parametros.distrito", function() {
    return !this.get("distrito");
  }),

  tareaCargarDistritos: task(function*() {
    this.set("cargandoDistritos", true);
    let distritos = [this.get("opcionTodos")];

    let data = yield this.get("store").query("distrito", {
      page_size: 500
    });

    data.map(d => {
      distritos.pushObject(d);
    });

    this.set("distritos", distritos);
    this.set("cargandoDistritos", false);
  }).drop(),

  tareaCargarLocalidades: task(function*() {
    this.set("cargandoLocalidades", true);
    let data = [this.get("opcionTodas")];

    yield timeout(2000);

    let localidades = yield this.get("store").query("localidad", {
      page_size: 500,
      distrito: this.get("distrito")
    });

    localidades.map(l => {
      data.pushObject(l);
    });

    this.set("localidades", data);
    this.set("cargandoLocalidades", false);
  }).drop(),

  didInsertElement() {
    this.get("tareaCargarDistritos").perform();

    if (this.get("distrito")) {
      this.get("tareaCargarLocalidades").perform();
    } else {
      this.set("localidades", [this.get("opcionTodas")]);
    }
  },

  actions: {
    cuandoSeleccionaDistrito(distrito) {
      let id = distrito.get("id");
      this.get("accionCompleta")("distrito", id);

      if (id) {
        this.get("accionCompleta")("localidad", "");
        this.get("tareaCargarLocalidades").perform();
      }
    },

    cuandoSeleccionaLocalidad(localidad) {
      this.get("accionCompleta")("localidad", localidad.get("id"));
    }
  }
});
