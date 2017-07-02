import { Model, belongsTo /*, hasMany*/ } from "ember-cli-mirage";

export default Model.extend({
  localidad: belongsTo("localidad"),
  tipoDeFinanciamiento: belongsTo("tipoDeFinanciamiento")
  /*
  tipoDeGestion: belongsTo("tipoDeGestion"),
  nivel: belongsTo("nivel"),
  area: belongsTo("area"),
  programas: hasMany("programa"),
  piso: belongsTo("piso")
  */
});
