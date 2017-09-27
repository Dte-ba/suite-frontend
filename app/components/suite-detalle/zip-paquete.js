import Ember from "ember";

export default Ember.Component.extend({
  linkDescarga: Ember.computed("model.idDevolucion", function() {
    var linkPaquete;
    let valor = this.get("model.idDevolucion");
    if (valor != 0) {
      linkPaquete = true;
    } else {
      linkPaquete = false;
    }
    return linkPaquete;
  })
});
