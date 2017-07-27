import DS from 'ember-data';

export default DS.Model.extend({
  tarea: DS.belongsTo('tarea'),
  fechaDeAlta: DS.attr('string'),
  autor: DS.belongsTo('perfil'),
  comentario: DS.attr('string')
});
