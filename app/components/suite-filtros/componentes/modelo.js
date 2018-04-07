import Ember from "ember";
import { task, timeout } from "ember-concurrency";

export default Ember.Component.extend({
  store: Ember.inject.service(),
  tagName: "",

  opcionTodos: null,
  cargando: true,

  valorComoObjeto: Ember.computed("valor", function() {
    let valor = this.get("valor");

    if (valor) {
      return this.get("store").find(this.get("nombre"), this.get("valor"));
    } else {
      return this.get("tarea.last.value")[0];
    }
  }),

  crearOpcionTodos() {
    return Ember.Object.create({
      nombre: this.get("etiquetaTodos") || "Todas",
      id: ""
    });
  },

  tarea: task(function*() {
    let opciones = [this.crearOpcionTodos()];

    let data = yield this.get("store").query(this.get("nombre"), {
      page_size: 100
    });

    data.map(e => {
      opciones.pushObject(e);
    });

    this.set("cargando", false);
    return opciones;
  }).drop(),

  didInsertElement() {
    this.get("tarea").perform();
  },
  actions: {
    cuandoSelecciona(registro) {
      this.get("accion")(registro.get("id"));
    }
  }
});
