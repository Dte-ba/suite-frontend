import Ember from "ember";
import { task, timeout } from "ember-concurrency";

export default Ember.Component.extend({
  store: Ember.inject.service(),
  perfilService: Ember.inject.service("perfil"),

  buscarPersonas: task(function*(term) {
    yield timeout(200);

    let soloSuRegion = !this.get("perfilService").tienePermiso("perfil.global");

    var query = { search: term };

    query.activos = true;

    if (soloSuRegion) {
      let region = this.get("perfilService").obtenerRegion();
      query.region__numero = region.get("numero");
    }

    return this.get("store").query("perfil", query);
  }),

  tareaAsignarEquipo: task(function*() {
    yield timeout(500);
    let region = this.get("perfilService")
      .obtenerRegion()
      .get("numero");

    let perfiles = yield this.get("store").query("perfil", { activos: true, page_size: 500, region__numero: region });
    // GET perfiles?activos=true&page_size=500&region__numero=?

    this.send("cuandoSeleccionaPerfil", perfiles);
  }),

  actions: {
    cuandoSeleccionaPerfil(perfil) {
      this.set("valor", perfil);
      this.get("cuandoSelecciona")(perfil);
    }
  }
});
