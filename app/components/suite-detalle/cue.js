import Ember from "ember";

export default Ember.Component.extend({
  mouseEnter() {
    this.set("debeMostrarPopup", true);
  },

  mouseLeave() {
    this.set("debeMostrarPopup", false);
  }
});
