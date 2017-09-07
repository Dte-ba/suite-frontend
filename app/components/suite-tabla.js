import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["suite-tabla"],
  tarea: null,
  filtro: null,
  pagina: null,

  didInsertElement() {
    this.set("filtro_temporal", this.get("filtro"));
  },

  actions: {
    cambiarPagina(pagina) {
      this.cuandoCambiaPagina(pagina);
    }
  }
});
