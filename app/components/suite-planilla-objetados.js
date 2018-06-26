import Ember from "ember";

export default Ember.Component.extend({
  didInsertElement() {
    let container = this.$(".suite-planilla")[0];
    let data = this.get("datos");
    let cuandoCambia = this.get("cuandoCambia");
    let columnas = this.get("columnas") || [];
    let anchosDeColumnas = this.get("anchosDeColumnas") || [
      120,
      120,
      120,
      120,
      120,
      120
    ];

    if (!data) {
      data = [columnas.map(() => "")];
    }

    new Handsontable(container, {
      rowHeaders: true,
      data: data,
      width: 800,
      height: 500,

      colWidths: anchosDeColumnas,
      colHeaders: columnas,

      columns: [{}, {}, {}, {}, {}, {}],
      afterChange: function() {
        if (cuandoCambia) {
          cuandoCambia(this.getData());
        }
      }
    });
  },

  validadorNE(valor, callback) {
    let esValido = /^[a-fA-F0-9]{20}$/.test(valor);
    if (valor === "D581B038CF8F4A8D7670") {
      esValido = false;
    }
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
