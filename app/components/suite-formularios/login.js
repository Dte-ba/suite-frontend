import Ember from "ember";
import { task, timeout } from "ember-concurrency";
import { validatePresence } from "ember-changeset-validations/validators";

let model = Ember.Object.create({
  usuario: "",
  clave: ""
});

export default Ember.Component.extend({
  classNames: ["login-contenedor"],
  session: Ember.inject.service("session"),

  model: model,

  validaciones: {
    usuario: [validatePresence(true)],
    clave: [validatePresence(true)]
  },

  autenticar(model) {
    let username = model.get("usuario");
    let password = model.get("clave");

    let session = this.get("session");
    let auth = "authenticator:drf-token-authenticator";

    return session.authenticate(auth, username, password).catch(reason => {
      return reason;
    });
  },

  submit: task(function*(model) {
    yield timeout(2000);
    let resultado = yield this.autenticar(model);

    try {
      let errors = JSON.parse(resultado);

      if (errors.non_field_errors) {
        this.set("error", errors.non_field_errors);
      } else {
        this.set("error", resultado);
      }
    } catch (e) {
      this.set("error", resultado);
    }

    model.set("clave", "");
    this.set("model", model);
  })
});
