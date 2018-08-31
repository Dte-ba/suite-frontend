import Ember from "ember";

export default Ember.Component.extend({
  etiqueta1: Ember.computed("etiquetaDesde", function() {
    return this.get("etiquetaDesde") || "Desde";
  }),
  etiqueta2: Ember.computed("etiquetaHasta", function() {
    return this.get("etiquetaHasta") || "Hasta";
  }),

  desde: Ember.computed("atributoDesde", function() {
    return this.get("atributoDesde") || "desde";
  }),
  hasta: Ember.computed("atributoHasta", function() {
    return this.get("atributoHasta") || "hasta";
  }),

  actions: {
    cuandoCambiaDesde(desde) {
      this.get("accionCompleta")(this.get("desde"), desde);
    },
    cuandoCambiaHasta(hasta) {
      this.get("accionCompleta")(this.get("hasta"), hasta);
    }
  }
});
