import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["suite-tabla-escuelas"],
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

    alIngresarFiltro() {
      this.set("filtro", this.get("filtro_temporal"));
      this.set("pagina", 1);
      this.send("buscar");
    },

    cambiarPagina(pagina) {
      this.set("pagina", pagina);
      this.send("buscar");
    }
  }
});
