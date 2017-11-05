import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",
  esLaPaginaActual: Ember.computed("numero", "actual", function() {
    return this.get("numero") === this.get("actual");
  }),

  esUnaPaginaAccesible: Ember.computed("numero", function() {
    return this.get("numero") !== "...";
  })
});
