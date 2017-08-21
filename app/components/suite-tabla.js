import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["suite-tabla"],
  tarea: null,
  filtro: null,
  pagina: 1,

  didInsertElement() {
    this.set("filtro_temporal", this.get("filtro"));
    this.send("buscar");
  },

  actions: {
    buscar() {
      if (this.get("tarea")) {
        this.get("tarea").perform({
          page: this.get("pagina"),
          query: this.get("filtro")
        });
      }
    },

    cambiarPagina(pagina) {
      this.set("pagina", pagina);
      this.send("buscar");
    }
  }
});
