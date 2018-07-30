import Ember from "ember";

export default Ember.Route.extend({
  breadCrumb: { title: "Detalle de escuela" },

  actions: {
    crearEventoParaEstaEscuela() {
      let model = this.modelFor("app.escuelas.detalle");
      return this.transitionTo("app.agenda.crear", {
        queryParams: { escuela_id: model.id }
      });
    },
    crearContactoParaEstaEscuela() {
      let model = this.modelFor("app.escuelas.detalle");
      return this.transitionTo("app.contactos.crear", {
        queryParams: { escuela_id: model.id }
      });
    },
    crearValidacionParaEstaEscuela() {
      let model = this.modelFor("app.escuelas.detalle");
      return this.transitionTo("app.validaciones.crear", {
        queryParams: { escuela_id: model.id }
      });
    }
  }
});
