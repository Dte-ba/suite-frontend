import Ember from "ember";
import { validatePresence } from "ember-changeset-validations/validators";

export default Ember.Route.extend({
  requiere: "paquetes.crear",
  queryParams: {
    escuela_id: {}
  },

  model(params) {
    let hoy = moment().format("YYYY-MM-DD");

    let opciones = {
      fechaPedido: hoy,
      columnas: ["NE", "Id de Hardware", "Marca de Arranque", "TPMData"],
      paquetes: [
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""]
      ],
      validaciones: {
        escuela: [validatePresence(true)]
      },
      solicitarPaquetes: this.get("solicitarPaquetes")
    };

    if (params.escuela_id) {
      return this.store.findRecord("escuela", params.escuela_id).then(data => {
        opciones.escuela = data;
        return Ember.Object.create(opciones);
      });
    }

    return Ember.Object.create(opciones);
  },

  actions: {
    alSolicitarPaquetes() {
      return this.transitionTo("app.paquetes.index");
    },
    cancelar() {
      return this.transitionTo("app.paquetes.index");
    }
  }
});
