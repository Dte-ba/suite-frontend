import Ember from "ember";
import QueryParamsResetRouteMixin from "ember-query-params-reset/mixins/query-params-reset-route";

export default Ember.Route.extend(QueryParamsResetRouteMixin, {
  requiere: "paquetes.crear",

  queryParams: {
    escuela_id: {}
  },

  model(params) {
    let hoy = moment().format("YYYY-MM-DD");
    let opciones = { fechaPedido: hoy };

    return this.store
      .findRecord("estado-de-paquete", 2)
      .then(estadoDePaquete => {
        opciones.estado = estadoDePaquete;

        if (params.escuela_id) {
          return this.store
            .findRecord("escuela", params.escuela_id)
            .then(data => {
              opciones.escuela = data;
              return this.store.createRecord("paquete", opciones);
            });
        }

        return this.store.createRecord("paquete", opciones);
      });
  },

  actions: {
    guardarPaquete(modelo) {
      return modelo.save().then(() => {
        this.transitionTo("app.paquetes.index");
      });
    },
    willTransition: function() {
      if (this.currentModel.get("isNew")) {
        this.get("currentModel").deleteRecord();
      }
    },

    cancelar() {
      return this.transitionTo("app.paquetes.index");
    }
  }
});
