import Ember from "ember";
import { task, timeout } from "ember-concurrency";

export default Ember.Component.extend({
  store: Ember.inject.service(),

  buscarLocalidades: task(function*(term) {
    yield timeout(200);
    let query = { search: term, conformada: false };

    if (this.get("region")) {
      query.distrito__region__numero = this.get("region");
    }

    return this.get("store").query("localidad", query);
  }),

  actions: {
    cuandoSeleccionaLocalidad(perfil) {
      this.set("valor", perfil);
      this.get("cuandoSelecciona")(perfil);
    }
  }
});
