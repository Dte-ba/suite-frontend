import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",

  actions: {
    cambiar(parametro, valor) {
      if (this.get("accion")) {
        this.get("accion")(parametro, valor);
      } else {
        throw Error("No has especificado el parámetro accion en suite-filtro");
      }
    }
  }
});
