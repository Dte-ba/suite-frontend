import Ember from "ember";

export default Ember.Route.extend({
  requiere: "escuelas.editar",

  afterModel(model) {
    model.set("opciones", {
      niveles: this.store.findAll("nivel"),
      areas: this.store.findAll("area"),
      modalidades: this.store.findAll("modalidad"),
      tiposDeFinanciamiento: this.store.findAll("tipo-de-financiamiento"),
      tiposDeGestion: this.store.findAll("tipo-de-gestion"),
      localidades: this.store.findAll("localidad"),
      programas: this.store.findAll("programa")
    });

    if (model.get("conformada")) {
      // TODO: Avisar que no puede editar una escuela conformada.
      this.transitionTo("app.escuelas.detalle", model);
    }
  },
  actions: {
    regresar(model) {
      return this.transitionTo("app.escuelas.detalle", model);
    },
    cancelar(model) {
      return this.transitionTo("app.escuelas.detalle", model);
    }
  }
});
