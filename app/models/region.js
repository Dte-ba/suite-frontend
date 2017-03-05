import DS from 'ember-data';

export default DS.Model.extend({
  numero: DS.attr('string'),
  municipios: DS.hasMany('municipio'),

  municipiosComoCadena: Ember.computed('municipios', function() {
    return this.get('municipios').map(e => e.get('nombre')).join(', ');
  })
});
