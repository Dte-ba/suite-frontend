import Ember from "ember";

export default Ember.Route.extend({
  requiere: "agenda.crear",
  notificador: Ember.inject.service(),
  perfil: Ember.inject.service(),

  afterModel(model) {
    model.set("buscarPersonas", this.get("buscarPersonas"));
    model.set(
      "talleres",
      this.store.query("tallerDeRobotica", { page_size: 3000 })
    );
    model.set(
      "cursos",
      this.store.query("cursoDeRobotica", { page_size: 3000 })
    );
    model.set(
      "secciones",
      this.store.query("seccionDeRobotica", { page_size: 3000 })
    );
    model.set("areas", this.store.query("areaDeRobotica", { page_size: 3000 }));

    if (model.get("cerrarEvento") === true) {
      this.get("notificador").error("No se puede editar un taller finalizado.");
      this.transitionTo("robotica.agenda.detalle", model.get("id"));
    }

    return this.get("perfil")
      .puedeEditarElTaller(model.get("id"))
      .then(puedeEditar => {
        if (!puedeEditar) {
          this.get("notificador").error(
            "No puede editar un taller de otro equipo."
          );
          this.transitionTo("robotica.agenda.detalle", model.get("id"));
        }
      });
  },
  actions: {
    verDetalle(modelo) {
      this.transitionTo("robotica.agenda.detalle", modelo.get("id"));
    },
    cancelar(modelo) {
      return this.transitionTo("robotica.agenda.detalle", modelo.get("id"));
    }
  }
});
