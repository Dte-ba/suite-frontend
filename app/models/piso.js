import DS from 'ember-data';

export default DS.Model.extend({
  servidor: DS.attr("string"),
  serie: DS.attr("string"),
  ups: DS.attr("boolean"),
  rack: DS.attr("boolean"),
  estado: DS.attr("boolean")
});
