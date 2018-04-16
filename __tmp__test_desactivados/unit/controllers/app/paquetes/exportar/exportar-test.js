import { moduleFor, test } from "ember-qunit";

moduleFor(
  "controller:app/paquetes/exportar/exportar",
  "Unit | Controller | app/paquetes/exportar/exportar",
  {
    // Specify the other units that are required for this test.
    needs: [
      "service:analytics",
      "service:notificador",
      "service:perfil",
      "service:ajax"
    ]
  }
);

// Replace this with your real tests.
test("it exists", function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
