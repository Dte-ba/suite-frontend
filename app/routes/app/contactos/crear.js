import Ember from "ember";
import QueryParamsResetRouteMixin from "ember-query-params-reset/mixins/query-params-reset-route";

export default Ember.Route.extend(QueryParamsResetRouteMixin, {
  requiere: "contacto.crear",
  perfil: Ember.inject.service(),
  queryParams: {
    escuela_id: {}
  },

  model(params) {
    let opciones = {};
    if (params.escuela_id) {
      return this.store.findRecord("escuela", params.escuela_id).then(data => {
        opciones.escuela = data;
        return this.store.createRecord("contacto", opciones);
      });
    }
    return this.store.createRecord("contacto", {});
  },

  afterModel(model) {
    if (!this.get("perfil").tienePermiso("personas.crear")) {
      this.transitionTo("/app/");
    } else {
      model.set("opciones", {
        cargos: this.store.findAll("cargoEscolar")
      });
      model.set("usuario", model);
    }
  },
  actions: {
    willTransition: function() {
      if (this.currentModel.get("isNew")) {
        this.get("currentModel").deleteRecord();
      }
    },
    verDetalle() {
      let model = this.modelFor("app.escuelas.detalle");
      this.transitionTo("app.escuelas.detalle", model.get("id"));
    },
    cancelar(model) {
      return this.transitionTo("app.contactos.detalle", model.get("id"));
    }
  }
});
