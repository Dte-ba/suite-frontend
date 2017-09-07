import Ember from "ember";

export default Ember.Component.extend({
  valorLocal: "",

  didInsertElement() {
    let valorIngresado = this.get("valor");
    this.set("valorLocal", valorIngresado);
  }
});
