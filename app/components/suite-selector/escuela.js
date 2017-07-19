import Ember from "ember";
import { task, timeout } from "ember-concurrency";

export default Ember.Component.extend({
  store: Ember.inject.service(),

  buscarEscuelas: task(function*(term) {
    yield timeout(200);
    let query =  { search: term };

    if (this.get('region')) {
      query.localidad__distrito__region__numero = this.get('region');
    }

    return this.get("store").query("escuela", query);
  }),

  actions: {
    cuandoSeleccionaEscuela(perfil) {
      this.set("valor", perfil);
      this.get("cuandoSelecciona")(perfil);
    }
  }
});
