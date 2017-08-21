import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  perfiles: DS.hasMany("perfil"),
});
