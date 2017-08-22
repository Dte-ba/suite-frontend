import Ember from "ember";

export default Ember.Component.extend({
  valorAnterior: null,

  horaInicial: Ember.computed("hora", function() {
    if (this.get("hora")) {
      return moment(this.get("hora"), "HH:mm:ss").format("HH:mm");
    }
  }),

  actions: {
    cuandoCambiaHora(valor) {
      let valorConvertido = moment(valor).format("HH:mm:00");

      if (this.get("valorAnterior") != valorConvertido) {
        if (this.get("cuandoCambia")) {
          this.get("cuandoCambia")(valorConvertido);
        }
        this.set("valorAnterior", valorConvertido);
      }
    }
  }
});
