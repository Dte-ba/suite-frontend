import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["suite-tabla"],
  tarea: null,
  filtro: undefined,
  pagina: null,

  actions: {
    cambiarPagina(pagina) {
      this.cuandoCambiaPagina(pagina);
    }
  }
});
