import Ember from "ember";
import { validatePresence } from "ember-changeset-validations/validators";

export default Ember.Component.extend({
  store: Ember.inject.service(),
  objetoPerfil: null,

  formulario: {
    perfil_id: null
  },

  validaciones: {
    desde: [validatePresence(true)],
    hasta: [validatePresence(true)],
    criterio: [validatePresence(true)]
  },

  willInsertElement() {
    let idPerfil = this.get("perfil_id");

    if (idPerfil) {
      this.set(
        "formulario.perfil",
        this.get("store").findRecord("perfil", idPerfil)
      );
    }
  }
});
