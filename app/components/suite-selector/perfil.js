import Ember from "ember";
import { task, timeout } from "ember-concurrency";

export default Ember.Component.extend({
  store: Ember.inject.service(),

  buscarPersonas: task(function*(term) {
    yield timeout(200);
    let query =  { search: term };

    if (this.get('region')) {
      query.region__numero = this.get('region');
    }

    return this.get("store").query("perfil", query);
  }),

  actions: {
    cuandoSeleccionaPerfil(perfil) {
      this.set("valor", perfil);
      this.get("cuandoSelecciona")(perfil);
    }
  }
});
