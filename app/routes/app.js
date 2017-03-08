import Ember from 'ember';

export default Ember.Route.extend({
  sesion: Ember.inject.service(),
  breadCrumb: null,

  beforeModel() {
    /* Evita que el usuario ingrese a la aplicación si no está autenticado. */
    if (!this.get('sesion.haIniciadoSesion')) {
      console.log("Evitando que el usuario ingrese, falta autenticar.");
      this.transitionTo('login');
    }
  }
});
