import Ember from "ember";
import QueryParamsResetRouteMixin from "ember-query-params-reset/mixins/query-params-reset-route";

export default Ember.Route.extend(QueryParamsResetRouteMixin, {
  perfil: Ember.inject.service(),
  queryParams: {
    escuela_id: {}
  },

  model(params) {
    let autor = this.get("perfil.miPerfil");
    let hoy = moment().format("YYYY-MM-DD");
    let opciones = { fechaDeAlta: hoy, autor: autor };

    return this.store
      .findRecord("estado-de-validacion", 1)
      .then(estadoDeValidacion => {
        opciones.estado = estadoDeValidacion;

        if (params.escuela_id) {
          return this.store
            .findRecord("escuela", params.escuela_id)
            .then(data => {
              opciones.escuela = data;
              return this.store.createRecord("validacion", opciones);
            });
        }

        return this.store.createRecord("validacion", opciones);
      });
  },

  actions: {
    guardarValidacion(modelo) {
      return modelo.save().then(() => {
        this.transitionTo("app.validaciones.index");
      });
    },
    willTransition: function() {
      if (this.currentModel.get("isNew")) {
        this.get("currentModel").deleteRecord();
      }
    },

    cancelar() {
      return this.transitionTo("app.validaciones.index");
    }
  }
});
