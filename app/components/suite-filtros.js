import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",

  filtrosAgrupadosPorFilas: Ember.computed("filtros", function() {
    let filtros = this.get("filtros") || [];

    // Especifica la fila 1 a todos los filtros que no lo tengan definido.
    filtros = filtros.map(e => {
      if (!e.fila) {
        e.fila = 1;
      }
      return e;
    });

    let numerosDeFilas = filtros
      .uniqBy("fila")
      .map(e => e.fila)
      .sort();

    return numerosDeFilas.map(numero => {
      return this.get("filtros").filterBy("fila", numero);
    });
  }),

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
