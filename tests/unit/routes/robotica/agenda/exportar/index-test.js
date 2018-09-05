import { moduleFor, test } from "ember-qunit";

moduleFor(
  "route:robotica/agenda/exportar/index",
  "Unit | Route | robotica/agenda/exportar/index",
  {
    // Specify the other units that are required for this test.
    needs: ["service:analytics", "service:notificador", "service:perfil"]
  }
);

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
