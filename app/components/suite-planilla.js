import Ember from "ember";

export default Ember.Component.extend({
  didInsertElement() {
    let container = this.$(".suite-planilla")[0];
    let data = this.get("datos");
    let cuandoCambia = this.get("cuandoCambia");
    let columnas = this.get("columnas") || [];
    let anchosDeColumnas = this.get("anchosDeColumnas") || [200, 200, 200];

    if (!data) {
      data = [columnas.map(() => "")];
    }

    new Handsontable(container, {
      rowHeaders: true,
      data: data,
      width: 800,
      height: 200,

      colWidths: anchosDeColumnas,
      colHeaders: columnas,
      afterChange: function() {
        if (cuandoCambia) {
          cuandoCambia(this.getData());
        }
      }
    });
  }
});
