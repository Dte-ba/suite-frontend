import Ember from "ember";
import { task, timeout } from "ember-concurrency";

export default Ember.Component.extend({
  store: Ember.inject.service(),

  buscarPersonas: task(function*(term) {
    yield timeout(200);
    return this.get("store").query("perfil", { search: term });
  }),

  actions: {
    cuandoSeleccionaPerfil(perfil) {
      this.set("valor", perfil);
      this.get("cuandoSelecciona")(perfil);
    }
  }
});
