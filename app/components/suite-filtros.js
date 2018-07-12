import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",

  tieneFiltrosAvanzadosParaMostrar: Ember.computed("filtros", function() {
    return this.get("filtros").filterBy("fila", 2).length > 0;
  }),

  filtrosAgrupadosPorFilas: Ember.computed("filtros", "mostrarFiltrosAvanzados", function() {
    let filtros = this.get("filtros") || [];

    if (!this.get("mostrarFiltrosAvanzados")) {
      return [this.get("filtros").filterBy("fila", 1)];
    } else {
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
    }
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
