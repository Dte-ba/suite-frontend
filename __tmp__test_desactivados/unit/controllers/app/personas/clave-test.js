import { moduleFor, test } from "ember-qunit";

moduleFor(
  "controller:app/personas/clave",
  "Unit | Controller | app/personas/clave",
  {
    needs: ["service:analytics", "service:notificador"]
  }
);

// Replace this with your real tests.
test("it exists", function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
