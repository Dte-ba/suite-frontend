import Ember from "ember";

export default Ember.Component.extend({
  perfil: Ember.inject.service(),
  rol: Ember.computed.alias("perfil.rol"),
  tagName: "",
  didInsertElement() {
    var rol = this.get("rol");
    if (
      rol === "Administrador" ||
      rol === "Referente" ||
      rol == "Administración"
    ) {
      this.set("veLista", true);
    }

    $("#sub-sidebar a").off("click");

    $("#sub-sidebar a").on("click", function() {
      $("#sub-sidebar").sidebar("hide");
    });
  }
});
