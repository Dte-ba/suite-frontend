import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",
  valorComoObjeto: Ember.computed("valor", function() {
    return this.get("opciones").findBy("id", this.get("valor"));
  }),
  opciones: [
    {
      id: "",
      nombre: "Todos"
    },
    {
      id: "funcionando",
      nombre: "Funcionando"
    },
    {
      id: "sin-funcionar",
      nombre: "Sin funcionar"
    }
  ],
  actions: {
    cuandoSelecciona(opcionSeleccionada) {
      this.get("accion")(opcionSeleccionada.id);
    }
  }
});
