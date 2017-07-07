import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr("string"),
  telefono_particular: DS.attr("string"),
  telefono_celular: DS.attr("string"),
  horario: DS.attr("string"),
  email: DS.attr("string"),
  escuela: DS.belongsTo("escuela"),
  cargo: DS.belongsTo("cargo"),

  
});
