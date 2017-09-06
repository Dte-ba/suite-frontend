import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('esperar', function(app, tiempo) {
  tiempo = (tiempo || 1) * 1000;

  //console.log("Se ha invocado al helper esperar: " + tiempo);

  Ember.run.later(() => {
    //console.log("Terminó la espera");
  }, tiempo);

});
