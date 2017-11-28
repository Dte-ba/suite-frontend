import DS from "ember-data";
import Ember from "ember";

export default DS.JSONAPISerializer.extend({
  serializeIntoHash: function(hash, type, record, options) {
    let data = this.serialize(record, options);

    // Intenta cambiar el type de las relaciones de grupos, como django espera.
    try {
      data.data.relationships.group.data.type = "Group";
    } catch (error) {
      this.set('error', error);
    }

    Ember.merge(hash, data);
  }
});
