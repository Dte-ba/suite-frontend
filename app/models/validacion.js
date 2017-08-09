import DS from 'ember-data';

export default DS.Model.extend({
  fechaDeAlta: DS.attr("string"),
  autor: DS.belongsTo("perfil"),
  cantidad: DS.attr("string"),
  observaciones: DS.attr("string"),
  estado: DS.belongsTo("estado-de-validacion"),
  escuela: DS.belongsTo("escuela")
});
