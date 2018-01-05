import Ember from "ember";

export default Ember.Test.registerAsyncHelper("esperar", function(app, tiempo) {
  tiempo = (tiempo || 2) * 1000;

  return new Ember.RSVP.Promise(success => {
    Ember.run.later(() => {
      success({});
    }, tiempo);
  });
});
