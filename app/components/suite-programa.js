import Ember from "ember";

export default Ember.Component.extend({
  tagName: "span",
  classNames: ["suite-programa"],
  siglas: Ember.computed("programa.nombre", function() {
    if (this.get("programa.nombre")) {
      return this.get("programa.nombre").replace(/[^A-Z]/g, "");
    }
  })
});
