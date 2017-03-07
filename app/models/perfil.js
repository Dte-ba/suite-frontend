import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  apellido: DS.attr('string'),
  dni: DS.attr('string'),
  cuit: DS.attr('string'),
  fechadenacimiento: DS.attr('string'),
  fechaDeIngreso: DS.attr('string')
});
