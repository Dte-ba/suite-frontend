import Ember from "ember";

export default Ember.Component.extend({
  formato: "YYYY-MM-DD",

  actions: {
    cuandoCambiaFecha(valor) {
      let valorConvertido = moment(valor).format(this.get("formato"));
      this.get("cuandoCambia")(valorConvertido);
    }
  }
});
