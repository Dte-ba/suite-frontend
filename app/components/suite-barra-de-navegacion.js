import Ember from "ember";
import ENV from "../config/environment";

export default Ember.Component.extend({
  classNames: ["ui", "fixed", "menu", "inverted", "barra-de-navegacion"],
  perfil: Ember.inject.service(),

  actions: {
    toggle: function(id) {
      $(`#${id}`).sidebar("toggle");
    }
  }
});
