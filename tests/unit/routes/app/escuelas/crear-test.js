import { moduleFor, test } from "ember-qunit";

moduleFor("route:app/escuelas/crear", "Unit | Route | app/escuelas/crear", {
  // Specify the other units that are required for this test.
  needs: [
    "service:perfil",
    "service:analytics",
    "service:perfil",
    "service:notificador"
  ]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
