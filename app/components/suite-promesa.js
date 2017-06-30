import Ember from "ember";

export default Ember.Component.extend({
  cargando: Ember.computed("valor", function() {
    return this.get("valor") === undefined;
  })
});
