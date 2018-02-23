import Ember from "ember";

export default Ember.Component.extend({
  errores: Ember.computed.alias("model.errors"),
  submitted: Ember.computed.alias("form.submitted")
});
