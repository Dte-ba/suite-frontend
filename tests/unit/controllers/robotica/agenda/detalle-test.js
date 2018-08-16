import { moduleFor, test } from "ember-qunit";

moduleFor(
  "controller:robotica/agenda/detalle",
  "Unit | Controller | robotica/agenda/detalle",
  {
    // Specify the other units that are required for this test.
    needs: ["service:analytics", "service:notificador"]
  }
);

// Replace this with your real tests.
test("it exists", function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
