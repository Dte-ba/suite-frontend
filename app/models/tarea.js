import DS from 'ember-data';

export default DS.Model.extend({
  titulo: DS.attr('string'),
  fechaDeAlta: DS.attr('string'),
  autor: DS.belongsTo('perfil'),
  responsable: DS.belongsTo('perfil'),
  descripcion: DS.attr('string'),
  motivoTarea: DS.belongsTo('motivoTarea'),
  estadoDeTarea: DS.belongsTo('estadoDeTarea'),
  prioridadDeTarea: DS.belongsTo('prioridadDeTarea'),
  escuela: DS.belongsTo('escuela')

});
