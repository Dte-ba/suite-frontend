import { moduleFor, test } from "ember-qunit";

moduleFor("controller:app/tareas/index", "Unit | Controller | app/tareas/index", {
  needs: ["service:analytics", "service:ajax", "service:perfil"]
});

// Replace this with your real tests.
test("it exists", function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
