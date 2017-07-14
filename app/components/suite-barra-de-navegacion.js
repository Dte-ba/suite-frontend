import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["ui", "fixed", "menu", "inverted", "barra-de-navegacion"],
  perfil: Ember.inject.service(),
  nombreCompleto: Ember.computed.alias("perfil.nombreCompleto"),

  actions: {
    toggle: function(id) {
      $(`#${id}`).sidebar("toggle");
    }
  }
});
