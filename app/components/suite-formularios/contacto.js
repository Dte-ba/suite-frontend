import Ember from "ember";
import { task, timeout } from "ember-concurrency";

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  store: Ember.inject.service(),
  error: "",
  idPerfil: null,

  tareaGuardar: task(function*(model) {
    try {
      yield timeout(2000);

      if (model.get("id")) {
        yield model.save();
      }

      if (this.get("cuandoGuarda")) {
        this.get("cuandoGuarda")();
      }

      this.set("error", "");
    } catch (e) {
      this.set("error", e);
      throw new Error(e);
    }
  }).drop()
});
