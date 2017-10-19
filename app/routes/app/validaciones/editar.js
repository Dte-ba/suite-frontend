import Ember from "ember";
import QueryParamsResetRouteMixin from "ember-query-params-reset/mixins/query-params-reset-route";

export default Ember.Route.extend(QueryParamsResetRouteMixin, {
  requiere: "validaciones.editar",
  perfil: Ember.inject.service(),

  model(params) {
    return this.store.findRecord("validacion", params.id);
  },

  afterModel(model) {
    var hoy = moment().format("YYYY-MM-DD");
    model.set("fechaDeModificacion", hoy);
    model.set("opciones", {
      estadosDeValidacion: this.store.findAll("estadoDeValidacion")
    });
  },

  actions: {
    guardarValidacion(modelo) {
      return modelo.save().then(() => {
        this.transitionTo("app.validaciones.index");
      });
    },
    cancelar() {
      return this.transitionTo("app.validaciones.index");
    }
  }
});
