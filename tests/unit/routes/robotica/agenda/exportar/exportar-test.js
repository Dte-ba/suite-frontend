import { moduleFor, test } from "ember-qunit";

moduleFor(
  "route:robotica/agenda/exportar/exportar",
  "Unit | Route | robotica/agenda/exportar/exportar",
  {
    // Specify the other units that are required for this test.
    needs: [
      "service:analytics",
      "service:notificador",
      "service:perfil",
      "service:descargas"
    ]
  }
);

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
