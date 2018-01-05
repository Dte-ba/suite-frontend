import Ember from "ember";

export default Ember.Component.extend({
  tagName: "span",
  debeMostrarPopup: false,

  mouseEnter() {
    let elementoConElipsis = this.$(".truncate")[0];

    function seActivoElipsis(e) {
      return e.offsetWidth < e.scrollWidth;
    }

    if (seActivoElipsis(elementoConElipsis)) {
      this.set("debeMostrarPopup", true);
    }
  },

  mouseLeave() {
    this.set("debeMostrarPopup", false);
  }
});
