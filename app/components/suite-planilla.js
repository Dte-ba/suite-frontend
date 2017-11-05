import Ember from "ember";

export default Ember.Component.extend({
  didInsertElement() {
    let container = this.$(".suite-planilla")[0];
    let data = this.get("datos");
    let cuandoCambia = this.get("cuandoCambia");
    let columnas = this.get("columnas") || [];
    let anchosDeColumnas = this.get("anchosDeColumnas") || [150, 150, 150, 150];

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

      columns: [
        {
          validator: this.validadorNE
        },
        {
          validator: this.validadorIDHardware
        },
        {},
        {
          validator: this.validadorTPMData
        }
      ],
      afterChange: function() {
        if (cuandoCambia) {
          cuandoCambia(this.getData());
        }
      }
    });
  },

  validadorNE(valor, callback) {
    let esValido = /^[a-fA-F0-9]{20}$/.test(valor);
    callback(esValido);
  },

  validadorIDHardware(valor, callback) {
    let esValido = /^[a-fA-F0-9]{12}$/.test(valor);
    callback(esValido);
  },

  validadorTPMData(valor, callback) {
    let esValido = /^si$|^no$/i.test(valor);
    callback(esValido || valor === "");
  }
});
