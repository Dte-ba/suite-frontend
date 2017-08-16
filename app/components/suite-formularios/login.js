import Ember from "ember";
import { task, timeout } from "ember-concurrency";


export default Ember.Component.extend({
  classNames: ["login-contenedor"],
  session: Ember.inject.service("session"),
  mostrarClave: false,

  usuario: '',
  clave: '',

  didInsertElement() {
    let input_usuario = this.$("input[name='usuario']")
    let input_clave = this.$("input[name='clave']")

    // Hace foco en el primer input.
    input_usuario.focus();

    // Si pulsa enter sobre el primer input pasa a la contraseña:
    input_usuario.keyup((event) => {
      if (event.keyCode == 13) {
        input_clave.focus();
      }
    });

    // Si pulsa enter sobre la contraseña intenta ingresar.
    input_clave.keyup((event) => {
      if (event.keyCode == 13) {
        this.send('ingresar');
      }
    });

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

    this.set("clave", "");
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
