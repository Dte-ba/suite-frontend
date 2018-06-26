import Ember from "ember";

export default Ember.Route.extend({
  requiere: "paquetes.objetar",

  model() {
    let hoy = moment().format("YYYY-MM-DD");

    let opciones = {
      fechaPedido: hoy,
      columnas: ["CUE", "Nro. Servidor", "N/E", "HWID", "BT", "Motivo"],
      paquetes: [
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""]
      ],
      validaciones: {},
      objetarPaquetes: this.get("objetarPaquetes")
    };

    return Ember.Object.create(opciones);
  },

  actions: {
    alObjetarPaquetes() {
      return this.transitionTo("app.paquetes.index");
    },
    cancelar() {
      return this.transitionTo("app.paquetes.index");
    }
  }
});
