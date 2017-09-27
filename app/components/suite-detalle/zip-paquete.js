import Ember from "ember";

export default Ember.Component.extend({
  linkDescarga: Ember.computed("model.idDevolucion", function() {
    var linkPaquete;
    let valor = this.get("model.idDevolucion");
    if (valor == 0 || valor == null) {
      linkPaquete = false;
    } else {
      linkPaquete = true;
    }
    return linkPaquete;
  })
});
