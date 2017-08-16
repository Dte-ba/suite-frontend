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
  mostrarClave: false,

  model: model,

  usuario: '',
  clave: '',

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
    this.set('error', '');
    yield timeout(500);
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
  }),

  tareaIngresar: task(function*(usuario, clave) {
    this.set('error', '');
    yield timeout(500);
    let resultado = yield this.autenticar(Ember.Object.create({usuario, clave}));

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
  }),

  actions: {
    alternarMostrarClave() {
      let elemento_input = $("input[name='clave']");

      this.toggleProperty('mostrarClave');

      if (this.get('mostrarClave')) {
        elemento_input.attr('type', 'text');
      } else {
        elemento_input.attr('type', 'password');
      }
    },

    ingresar() {
      this.get('tareaIngresar').perform(this.get('usuario'), this.get('clave'));
    }
  }
});
