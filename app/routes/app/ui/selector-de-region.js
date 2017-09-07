import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return {
      region: this.store.findRecord("region", 1)
    };
  },

  actions: {
    cuandoSeleccionaRegion(region) {
      Ember.set(this.modelFor(this.routeName), "region", region);
    }
  }
});
