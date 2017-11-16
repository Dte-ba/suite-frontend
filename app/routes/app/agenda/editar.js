import Ember from "ember";

export default Ember.Route.extend({
  requiere: "agenda.crear",
  notificador: Ember.inject.service(),
  perfil: Ember.inject.service(),

  afterModel(model) {
    model.set("buscarPersonas", this.get("buscarPersonas"));
    model.set("categorias", this.store.findAll("categoriaDeEvento"));

    if (model.get("acta") || model.get("actaLegacy")) {
      this.get("notificador").error("No se puede editar una acción finalizada.");
      this.transitionTo("app.agenda.detalle", model.get("id"));
    }

    return this.get('perfil').puedeEditarLaAccion(model.get('id')).then(puedeEditar => {

      if (!puedeEditar) {
        this.get("notificador").error("No puede editar una acción de otro equipo.");
        this.transitionTo("app.agenda.detalle", model.get("id"));
      }

    })
  },
  actions: {
    verDetalle(modelo) {
      this.transitionTo("app.agenda.detalle", modelo.get("id"));
    },
    cancelar(modelo) {
      return this.transitionTo("app.agenda.detalle", modelo.get("id"));
    }
  }
});
