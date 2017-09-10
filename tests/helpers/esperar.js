import Ember from "ember";

export default Ember.Test.registerAsyncHelper("esperar", function(app, tiempo) {
  tiempo = (tiempo || 2) * 1000;
  //console.log("Se ha invocado al helper esperar: " + tiempo);

  return Ember.run.later(() => {
    //console.log("Terminó la espera");
  }, tiempo);
});
