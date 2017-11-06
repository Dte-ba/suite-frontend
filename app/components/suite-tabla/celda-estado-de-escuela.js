import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",
  cargando: Ember.computed("valor", function() {
    return this.get("valor") === undefined;
  }),
  estado: Ember.computed("valor", function() {
    let valor = this.get("valor");
    let estado = valor.estado;
    return estado;
  }),
  conformada: Ember.computed("valor", function() {
    let valor = this.get("valor");
    let conformada = valor.conformada;
    if (conformada === true) {
      return conformada;
    }
  }),
  absorbida: Ember.computed("valor", function() {
    let valor = this.get("valor");
    let absorbida = valor.absorbida;
    if (absorbida === true) {
      return absorbida;
    }
  })
});
