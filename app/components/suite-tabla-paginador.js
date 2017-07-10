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
      this.sendAction("cuandoCambiaPagina", this.get("paginaActual") - 1);
    },
    mostrarSiguientePagina() {
      this.sendAction("cuandoCambiaPagina", this.get("paginaActual") + 1);
    }
  }
});
