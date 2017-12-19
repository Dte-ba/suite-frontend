import { moduleFor, test } from "ember-qunit";

moduleFor("route:app/personas/informes/index", "Unit | Route | app/personas/informes/index", {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: ["service:analytics", "service:notificador", "service:perfil"]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
