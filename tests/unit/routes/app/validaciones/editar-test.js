import { moduleFor, test } from "ember-qunit";

moduleFor(
  "route:app/validaciones/editar",
  "Unit | Route | app/validaciones/editar",
  {
    // Specify the other units that are required for this test.
    needs: ["service:analytics", "service:perfil", "service:notificador"]
  }
);

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
