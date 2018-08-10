import { moduleForModel, test } from "ember-qunit";

moduleForModel("taller-de-robotica", "Unit | Model | taller de robotica", {
  // Specify the other units that are required for this test.
  needs: ["model:area-de-robotica", "model:eje-de-robotica"]
});

test("it exists", function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
