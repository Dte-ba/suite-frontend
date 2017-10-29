import Ember from "ember";

export default Ember.Route.extend({
  requiere: "escuelas.editar",
  notificador: Ember.inject.service(),
  perfil: Ember.inject.service(),

  afterModel(model) {
    this.evitarQuePuedaEditarEscuelasDeOtraRegion(model);

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

  /* Si el usuario es de otra región diferente a la de la escuela le
   * prohibe la edición.
   */
  evitarQuePuedaEditarEscuelasDeOtraRegion(model) {
    if (!this.get("perfil").tienePermiso("perfil.global")) {
      if (model.get("numero_de_region") !== this.get("perfil.region")) {
        let m = "No puede editar esta escuela porque pertenece a otra región.";
        this.get("notificador").error(m);
        return this.transitionTo("app.escuelas.detalle", model.get("id"));
      }
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
