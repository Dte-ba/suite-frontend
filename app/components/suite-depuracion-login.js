import Ember from "ember";
import ENV from "../config/environment";

export default Ember.Component.extend({
  classNames: ["suite-depuracion-login__contenedor"],

  didInsertElement() {
    this.set("esModoDesarrollo", ENV.environment === "development");
  },

  actions: {
    ingresar(usuario, password) {
      $("input[name=usuario]").val(usuario);
      $("input[name=clave]").val(password);

      $("input[name=usuario]").trigger("change");
      $("input[name=clave]").trigger("change");

      $("#ingresar").click();
    }
  }
});
