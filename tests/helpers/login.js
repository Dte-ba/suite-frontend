import Ember from "ember";

export default Ember.Test.registerAsyncHelper("login", function() {
  visit("/login");

  fillIn("#name", "demo");
  fillIn("#password", "demo");
  click("#ingresar");
});
