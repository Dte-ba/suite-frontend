import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    let contenido = this.$(".contenido").html().trim();

    if (!contenido) {
      return;
    }

    let lineas = contenido.split("\n");

    let lineas_con_html = lineas.map((e) => {
      let valores = e.split(":");
      let clave = valores[0];
      let valor = valores[1];

      return `<dt><strong>${clave}:</strong> ${valor}</dt>`;
    });

    this.$(".contenido").html(lineas_con_html);

  }
});
