import Ember from 'ember';

export default Ember.Controller.extend({
  sesion: Ember.inject.service(),

  ingresarComo(nombre) {
    return this.store.createRecord('sesion', {
      usuario: nombre,
    }).save().then(() => {
      this.get('sesion').login(nombre);
      this.transitionToRoute('app.index');
    });
  },

  actions: {
    loginProgramador() {
      return this.ingresarComo("Programador");


    },
    loginDTE() {
      return this.ingresarComo("DTE");
    }
  }
});
