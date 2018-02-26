import Ember from "ember";
import { validatePresence } from "ember-changeset-validations/validators";

export default Ember.Component.extend({
  store: Ember.inject.service(),
  objetoPerfil: null,
  listo: false,

  formulario: {
    perfil_id: null,
    desde: null,
    hasta: null
  },

  validaciones: {
    desde: [validatePresence(true)],
    hasta: [validatePresence(true)],
    perfil: [validatePresence(true)]
  },

  willInsertElement() {
    let idPerfil = this.get("perfil_id");

    this.set("formulario.perfil_id", this.get("perfil_id"));
    this.set("formulario.desde", this.get("desde"));
    this.set("formulario.hasta", this.get("hasta"));

    if (idPerfil) {
      this.get("store")
        .findRecord("perfil", idPerfil)
        .then(data => {
          this.set("formulario.perfil", data);
          this.set("listo", true);
        });
    } else {
      this.set("listo", true);
    }
  }
});
