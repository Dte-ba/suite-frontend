import Ember from "ember";
import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr("string"),
  perfiles: DS.hasMany("perfil"),
  nombre: Ember.computed("name", function() {
    let nombre = this.get("name");

    return nombre;
  })
});
