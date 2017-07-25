import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr("string"),
  tareas: DS.hasMany("tarea")
});
