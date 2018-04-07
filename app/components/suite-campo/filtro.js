import Ember from "ember";

export default Ember.Component.extend({
  valorLocal: "",
  soloIcono: false,

  didInsertElement() {
    let valorIngresado = this.get("valor");
    this.set("valorLocal", valorIngresado);
  },

  cuandoCambiaValor: Ember.observer("valor", function() {
    this.set("valorLocal", this.get("valor"));
  })
});
