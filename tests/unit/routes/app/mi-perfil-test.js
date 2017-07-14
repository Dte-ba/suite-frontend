import { moduleFor, test } from "ember-qunit";

moduleFor("route:app/mi-perfil", "Unit | Route | app/mi perfil", {
  // Specify the other units that are required for this test.
  needs: ["service:perfil"]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
