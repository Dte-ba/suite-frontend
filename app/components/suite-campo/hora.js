import Ember from "ember";

export default Ember.Component.extend({
  contador: 0,
  valorAnterior: null,

  horaInicial: Ember.computed("hora", function() {
    if (this.get("hora")) {
      return moment(this.get("hora"), "HH:mm:ss").format("HH:mm");
    }
  }),

  actions: {
    cuandoCambiaHora(valor) {
      this.incrementProperty("contador");
      let valorConvertido = moment(valor).format("HH:mm:00");

      if (this.get("valorAnterior") != valorConvertido) {
        this.get("cuandoCambia")(valorConvertido);
        this.set("valorAnterior", valorConvertido);
      }
    }
  }
});
