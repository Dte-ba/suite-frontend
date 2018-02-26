import Ember from "ember";
import { validatePresence } from "ember-changeset-validations/validators";

export default Ember.Component.extend({
  store: Ember.inject.service(),
  objetoPerfil: null,
  listo: false,

  formulario: {
    region_id: null,
    desde: null,
    hasta: null
  },

  validaciones: {
    desde: [validatePresence(true)],
    hasta: [validatePresence(true)],
    region: [validatePresence(true)]
  },

  willInsertElement() {
    let idRegion = this.get("region_id");

    this.set("formulario.region_id", this.get("region_id"));
    this.set("formulario.desde", this.get("desde"));
    this.set("formulario.hasta", this.get("hasta"));

    if (idRegion) {
      this.get("store")
        .findRecord("region", idRegion)
        .then(data => {
          this.set("formulario.region", data);
          this.set("listo", true);
        });
    } else {
      this.set("listo", true);
    }
  }
});
