import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    crearContactoParaEstaEscuela() {
      alert("Debo crear contacto");
    },
    crearEventoParaEstaEscuela() {
      let model = this.get("model");
      return this.transitionToRoute("robotica.agenda.crear", {
        queryParams: { escuela_id: model.id }
      });
    }
  }
});
