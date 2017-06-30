import Ember from "ember";

export default Ember.Component.extend({
  meta: null,
  tarea: null,
  classNames: ["suite-tabla-paginador"],

  paginaActual: Ember.computed.alias("meta.pagination.page"),
  cantidadDePaginas: Ember.computed.alias("meta.pagination.pages"),

  puedeRetroceder: Ember.computed("paginaActual", function() {
    return this.get("paginaActual") > 1;
  }),

  puedeAvanzar: Ember.computed("paginaActual", "cantidadDePaginas", function() {
    return this.get("paginaActual") !== this.get("cantidadDePaginas");
  }),

  actions: {
    mostrarPaginaAnterior() {
      return this.get("tarea").perform({ page: this.get("paginaActual") - 1 });
    },
    mostrarSiguientePagina() {
      return this.get("tarea").perform({ page: this.get("paginaActual") + 1 });
    }
  }
});
