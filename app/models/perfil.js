import DS from 'ember-data';

export default DS.Model.extend({
  dni: DS.attr('string'),
  cuit: DS.attr('string'),
  fechadenacimiento: DS.attr('string')
});
