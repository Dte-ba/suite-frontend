import { moduleFor, test } from "ember-qunit";

moduleFor("route:app/tareas/index", "Unit | Route | app/tareas/index", {
  // Specify the other units that are required for this test.
  needs: ["service:ajax", "service:analytics"]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
