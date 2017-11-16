import Ember from "ember";

export default Ember.Component.extend({
  meta: null,
  tarea: null,
  classNames: ["suite-tabla-paginador"],

  paginaActual: Ember.computed.alias("meta.pagination.page"),
  cantidadDePaginas: Ember.computed.alias("meta.pagination.pages"),

  listaDePaginas: Ember.computed(
    "cantidadDePaginas",
    "paginaActual",
    function() {
      let cantidadDePaginas = this.get("cantidadDePaginas");
      let paginaActual = this.get("paginaActual");

      if (cantidadDePaginas <= 7) {
        let paginas = [];

        for (let i = 1; i < cantidadDePaginas + 1; i++) {
          paginas.push(i);
        }
        return paginas;
      } else {
        if (paginaActual > 3 && paginaActual < cantidadDePaginas - 1) {
          return [
            1,
            2,
            "...",
            paginaActual - 1,
            paginaActual,
            paginaActual + 1,
            "...",
            cantidadDePaginas - 1,
            cantidadDePaginas
          ];
        } else {

          if (paginaActual == 3) {
            return [1, 2, 3, "...", cantidadDePaginas - 1, cantidadDePaginas];
          } else {
            return [1, 2, "...", cantidadDePaginas - 1, cantidadDePaginas];
          }

        }
      }
    }
  ),

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
    },
    mostrarPagina(numero) {
      this.set("paginaActual", numero);
      this.sendAction("cuandoCambiaPagina", this.get("paginaActual"));
    }
  }
});
