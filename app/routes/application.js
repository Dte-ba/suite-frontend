import Ember from 'ember';

export default Ember.Route.extend({
  sesion: Ember.inject.service(),

  model() {
    return this.store.findAll('sesion').then(data => {
      if (data.get('length') === 0) {
        return;
      } else {
        let nombre = data.get('firstObject').get('usuario');
        this.get('sesion').login(nombre);
      }
    });
  }
});
