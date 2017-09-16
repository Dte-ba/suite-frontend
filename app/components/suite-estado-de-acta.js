import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",

  tieneActa: Ember.computed("evento.actaLegacy", "evento.acta", function() {
    return this.get("evento.actaLegacy") || this.get("evento.acta");
  })
});
