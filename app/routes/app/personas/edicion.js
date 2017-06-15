import Ember from "ember";

export default Ember.Route.extend({
  breadCrumb: { title: `Edición` },

  afterModel(model) {
    model.set("usuario", model);
    model.set("validaciones", []);
  }
});
