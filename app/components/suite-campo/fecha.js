import Ember from "ember";

export default Ember.Component.extend({
  formato: "YYYY-MM-DD",
  valorAnterior: null,

  actions: {
    cuandoCambiaFecha(valor) {
      let valorConvertido = moment(valor).format(this.get("formato"));

      if (this.get("valorAnterior") != valorConvertido) {
        if (this.get("cuandoCambia")) {
          this.get("cuandoCambia")(valorConvertido);
        }
        this.set("valorAnterior", valorConvertido);
      }
    }
  }
});
