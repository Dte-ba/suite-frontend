import Ember from "ember";

export default Ember.Component.extend({
  actions: {
    cuandoCambiaDesde(desde) {
      this.get("accionCompleta")("desde", desde);
    },
    cuandoCambiaHasta(hasta) {
      this.get("accionCompleta")("hasta", hasta);
    }
  }
});
