import { moduleFor, test } from "ember-qunit";

moduleFor("route:robotica", "Unit | Route | robotica", {
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
