import Ember from "ember";

export default Ember.Component.extend({
  contador: 0,

  horaInicial: Ember.computed("hora", function() {
    if (this.get("hora")) {
      return moment(this.get("hora"), "HH:mm:ss").format("HH:mm");
    }
  }),

  actions: {
    cuandoCambiaHora(valor) {
      this.incrementProperty("contador");
      let valorConvertido = moment(valor).format("HH:mm:00");

      /* Evita llamar dos veces al setter cuando permanece abierto el
         popup del selector de hora. */
      if (this.get("contador") == 2) {
        this.set("contador", 0);
        this.get("cuandoCambia")(valorConvertido);
      }
    }
  }
});
