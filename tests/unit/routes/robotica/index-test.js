import { moduleFor, test } from "ember-qunit";

moduleFor("route:robotica/index", "Unit | Route | robotica/index", {
  // Specify the other units that are required for this test.
  needs: ["service:analytics", "service:perfil", "service:notificador"]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
