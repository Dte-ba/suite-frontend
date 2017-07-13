import Ember from "ember";
import Base from "ember-simple-auth/authorizers/base";

export default Base.extend({
  session: Ember.inject.service("session"),

  authorize: function(sessionData, block) {
    let autentidated = this.get("session.isAuthenticated");

    if (autentidated && !Ember.isEmpty(sessionData.token)) {
      block("Authorization", "Token " + sessionData.token);
    }
  }
});
