import DS from "ember-data";

export default DS.Model.extend({
  nombre: DS.attr("string"),
  area: DS.belongsTo("areaDeRobotica"),
  eje: DS.belongsTo("ejeDeRobotica")
});
