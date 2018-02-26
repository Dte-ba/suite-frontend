import Ember from "ember";
import { task, timeout } from "ember-concurrency";

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  store: Ember.inject.service(),
  error: "",
  idPerfil: null,

  tareaGuardar: task(function*(model, transition) {
    try {
      yield timeout(2000);

      if (model.get("id")) {
        yield model.save();
      } else {
        let valores = {
          nombre: model.get("nombre"),
          escuela: model.get("escuela"),
          cargo: model.get("cargo"),
          telefono: model.get("telefono_particular"),
          celular: model.get("telefono_celular"),
          email: model.get("email"),
          horario: model.get("horario")
        };
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
