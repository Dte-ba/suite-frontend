import { Model, belongsTo, hasMany } from "ember-cli-mirage";

export default Model.extend({
  region: belongsTo(),
  localidades: hasMany()
});
