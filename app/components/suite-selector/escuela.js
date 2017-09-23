import Ember from "ember";
import { task, timeout } from "ember-concurrency";

export default Ember.Component.extend({
  store: Ember.inject.service(),
  perfilService: Ember.inject.service("perfil"),

  buscarEscuelas: task(function*(term) {
    yield timeout(200);

    let soloSuRegion = !this.get("perfilService").tienePermiso("perfil.global");

    var query = { search: term, conformada: false };

    if (soloSuRegion) {
      let region = this.get("perfilService").obtenerRegion();
      query.localidad__distrito__region__numero = region.get("numero");
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
