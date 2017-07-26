import DS from 'ember-data';

export default DS.Model.extend({
  titulo: DS.attr('string'),
  fechaDeAlta: DS.attr('string'),
  autor: DS.belongsTo('perfil'),
  responsable: DS.belongsTo('perfil'),
  descripcion: DS.attr('string'),
  motivoDeTarea: DS.belongsTo('motivoDeTarea'),
  estadoDeTarea: DS.belongsTo('estadoDeTarea'),
  prioridadestTarea: DS.belongsTo('prioridadDeTarea'),
  escuela: DS.belongsTo('escuela')

});
