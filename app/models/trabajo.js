import DS from 'ember-data';

export default DS.Model.extend({
  fecha: DS.attr('date'),
  nombre: DS.attr('string'),
  trabajoId: DS.attr('string'),
  resultado: DS.attr('string'),
  progreso: DS.attr('number')
});
