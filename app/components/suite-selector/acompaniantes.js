import Ember from "ember";
import { task, timeout } from "ember-concurrency";

export default Ember.Component.extend({
  store: Ember.inject.service(),
  perfilService: Ember.inject.service("perfil"),

  buscarPersonas: task(function*(term) {
    yield timeout(200);

    let soloSuRegion = !this.get("perfilService").tienePermiso("perfil.global");

    var query = { search: term };

    if (soloSuRegion) {
      let region = this.get("perfilService").obtenerRegion();
      query.region__numero = region.get("numero");
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
