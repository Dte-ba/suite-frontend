import { moduleFor, test } from "ember-qunit";

moduleFor("route:app/agenda/crear", "Unit | Route | app/agenda/crear", {
  // Specify the other units that are required for this test.
  needs: ["service:analytics"]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
