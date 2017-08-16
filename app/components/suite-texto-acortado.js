import Ember from 'ember';

export default Ember.Component.extend({
  cantidad: 30,

  debeAcortar: Ember.computed('texto', function() {
    return (this.get('texto').length > this.get('cantidad'));
  }),

  textoAcortado: Ember.computed('texto', 'debeAcortar', function() {
    let texto = this.get('texto');

    if (this.get('debeAcortar')) {
      let cantidad = this.get('cantidad');

      if (texto.length > cantidad) {
        return this.get('texto').substr(0, cantidad) + " ...";
      } else {
        return this.get('texto');
      }
    }
  })
});
