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
      id: "con-llave",
      nombre: "Con llave"
    },
    {
      id: "sin-llave",
      nombre: "Sin llave"
    }
  ],
  actions: {
    cuandoSelecciona(opcionSeleccionada) {
      this.get("accion")(opcionSeleccionada.id);
    }
  }
});
