import Ember from "ember";

export default Ember.Controller.extend({
  session: Ember.inject.service("session"),

  actions: {
    authenticate() {
      let { username, password } = this.getProperties("username", "password");
      this.get("session")
        .authenticate(
          "authenticator:drf-token-authenticator",
          username,
          password
        )
        .catch(reason => {
          try {
            let errors = JSON.parse(reason);

            if (errors.non_field_errors) {
              this.set("error", errors.non_field_errors);
            } else {
              this.set("error", reason);
            }
          } catch (e) {
            this.set("error", reason);
          }
        });
    }
  }
});
