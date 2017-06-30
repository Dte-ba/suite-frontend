import Ember from "ember";

export default Ember.Component.extend({
  tarea: null,

  didInsertElement() {
    if (this.get("tarea")) {
      this.get("tarea").perform({ page: 1 });
    }
  }
});
