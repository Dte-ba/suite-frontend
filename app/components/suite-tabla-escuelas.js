import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["suite-tabla-escuelas"],
  tarea: null,

  didInsertElement() {
    if (this.get("tarea")) {
      this.get("tarea").perform({ page: 1 });
    }
  }
});
