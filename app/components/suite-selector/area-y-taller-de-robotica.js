import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",

  store: Ember.inject.service(),

  inhabilitarTaller: Ember.computed("talleresFiltradosPorArea.length", function() {
    return this.get("talleresFiltradosPorArea.length") === 0;
  }),

  placeholder: Ember.computed("inhabilitarTaller", function() {
    if (this.get("inhabilitarTaller")) {
      return "Seleccione un área primero";
    }
  }),

  talleresFiltradosPorArea: Ember.computed("formulario.model.areaEnQueSeDicta", function() {
    let area = this.get("formulario.model.areaEnQueSeDicta");
    let area_id = (area && area.id) || this.get("model.areaEnQueSeDicta.id");

    if (area_id) {
      return this.get("store").query("tallerDeRobotica", { area__id: area_id, page_size: 3000 });
    } else {
      return [];
    }
  }),

  actions: {
    alCambiarArea(funcion_actualizar, valor) {
      funcion_actualizar(valor);
      if (this.get("formulario.model.titulo")) {
        this.set("formulario.model.titulo", undefined);
      }
    }
  }
});
