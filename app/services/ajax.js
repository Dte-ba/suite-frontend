import Ember from "ember";
import AjaxService from "ember-ajax/services/ajax";
import ENV from "../config/environment";

export default AjaxService.extend({
  trustedHosts: ["localhost", "suite-backend.enjambrelab.com.ar", "suite-backend.dtelab.com.ar"],
  session: Ember.inject.service("session"),

  host: Ember.computed(function() {
    return ENV.host;
  }),

  namespace: Ember.computed(function() {
    return "api";
  }),

  headers: Ember.computed("session.authToken", {
    get() {
      let headers = {};
      const authToken = this.get("session.data.authenticated.token");

      if (authToken) {
        headers["Authorization"] = "Token " + authToken;
      }

      return headers;
    }
  })
});
