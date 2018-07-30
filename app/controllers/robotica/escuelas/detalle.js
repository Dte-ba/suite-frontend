import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    crearContactoParaEstaEscuela() {
      alert("Debo crear contacto");
    },
    crearEventoParaEstaEscuela() {
      alert("Debo crear un evento");
    }
  }
});
