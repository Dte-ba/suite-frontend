import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.set("filtro_temporal", this.get("filtro"));
  },
  actions: {
    alIngresarFiltro() {
      this.set("filtro", this.get("filtro_temporal"));
      let pagina = this.get("pagina");
      let filtro = this.get("filtro");

      this.get("tarea").perform({ query: filtro, pagina: pagina });
    }
  }
});
