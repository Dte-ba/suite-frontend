import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",
  estilo: `
    ba pa2 button
    dib br2
    lato f5 pointer link
    black bg-animate b--black-20
    unselectable
    truncate
    no-outline
    hover-bg-light-gray
  `,
  ejecutando: false,

  actions: {
    ejecutarAccion() {
      this.set("ejecutando", true);

      Ember.run.later(() => {
        this.get("accion")();
        this.set("ejecutando", false);
      }, 500);
    }
  }
});
