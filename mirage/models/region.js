import { Model, hasMany } from "ember-cli-mirage";

export default Model.extend({
  distritos: hasMany()
});
