import Ember from "ember";

export default Ember.Component.extend({
  asc: Ember.computed("ordenamiento", "columna.ordenamiento", function() {
    return this.get("ordenamiento") === this.get("columna.ordenamiento");
  }),

  desc: Ember.computed("ordenamiento", "columna.ordenamiento", function() {
    return this.get("ordenamiento") === `-${this.get("columna.ordenamiento")}`;
  }),

  actions: {
    cambiarOrden() {
      let ordenamientoActual = this.get("ordenamiento");
      let ordenamiento = this.get("columna.ordenamiento");
      let orden = null;

      if (ordenamientoActual === ordenamiento) {
        orden = `-${ordenamiento}`;
      } else {
        if (ordenamientoActual === `-${ordenamiento}`) {
          orden = "";
        } else {
          orden = ordenamiento;
        }
      }

      if (this.get("accion")) {
        this.get("accion")(orden);
      } else {
        throw Error(
          "Se intenta ordenar una columna pero el componente no recivió el argumento accion"
        );
      }
    }
  }
});
