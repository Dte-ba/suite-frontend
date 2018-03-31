import DS from "ember-data";
import { validatePresence } from "ember-changeset-validations/validators";

export default DS.Model.extend({
  archivo: DS.attr(),

  validaciones: {
    archivo: [validatePresence(true)]
  }
});
