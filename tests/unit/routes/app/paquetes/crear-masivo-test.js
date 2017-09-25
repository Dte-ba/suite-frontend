import { moduleFor, test } from "ember-qunit";

moduleFor(
  "route:app/paquetes/crear-masivo",
  "Unit | Route | app/paquetes/crear masivo",
  {
    // Specify the other units that are required for this test.
    needs: ["service:analytics"]
  }
);

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
