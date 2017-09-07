import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["suite-depuracion-login__contenedor"],

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
