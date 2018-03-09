import Ember from "ember";
import ENV from "suite-frontend/config/environment";

export default Ember.Component.extend({
  tagName: "",
  perfil: Ember.inject.service(),

  version: Ember.computed(function() {
    return ENV.APP.version.split("+")[0];
  }),

  versionDelBackend: Ember.computed.alias("perfil.version")
});
