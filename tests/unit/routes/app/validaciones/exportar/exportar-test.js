import { moduleFor, test } from "ember-qunit";

moduleFor(
  "route:app/validaciones/exportar/exportar",
  "Unit | Route | app/validaciones/exportar/exportar",
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
