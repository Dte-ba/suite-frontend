import Ember from "ember";

export default Ember.Component.extend({
  deshabilitado: false,
  conBusqueda: true,
  placeholder: "Por favor seleccione",
  noMatchesMessage: "Sin resultados",
  etiquetaDelModelo: "nombre", // Qué propiedad será la que se solicitará desde el for each.

  actions: {
    cuandoCambia(opcion) {
      this.cuandoSelecciona(opcion);
    }
  }
});
