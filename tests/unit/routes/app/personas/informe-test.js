import { moduleFor, test } from "ember-qunit";

moduleFor("route:app/personas/informe", "Unit | Route | app/personas/informe", {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: [
    "service:ajax",
    "service:analytics",
    "service:perfil",
    "service:notificador"
  ]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
