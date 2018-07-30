import { moduleFor, test } from "ember-qunit";

moduleFor("route:home", "Unit | Route | home", {
  // Specify the other units that are required for this test.
  needs: [
    "service:analytics",
    "service:perfil",
    "service:notificador",
    "service:session"
  ]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
