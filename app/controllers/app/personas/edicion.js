import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    guardar(model) {
      return new Ember.RSVP.Promise(sucess => {
        model.set("demo", 123123123);
        model.save();
        sucess();
      });
    }
  }
});
