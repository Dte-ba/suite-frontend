import Ember from "ember";

export default Ember.Component.extend({
  cargando: Ember.computed("valor", function() {
    return this.get("valor") === undefined;
  }),
  estado: Ember.computed("valor", function() {
    let valor = this.get("valor");
    if (valor === 0) {
      return false;
    } else {
      return true;
    }
  })
});
