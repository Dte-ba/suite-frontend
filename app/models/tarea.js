import DS from 'ember-data';

export default DS.Model.extend({
  titulo: DS.attr('String'),
  fechaDeAlta: DS.attr('String'),
  autor: DS.belongsTo('perfil'),
  responsable: DS.belongsTo('perfil'),
  descripcion: DS.attr('String'),
  motivo: DS.belongsTo('motivoDeTarea'),
  estado: DS.belongsTo('estadoDeTarea'),
  // prioridad: DS.belongsTo('prioridadDeTarea'),
  escuela: DS.belongsTo('escuela'),

});
