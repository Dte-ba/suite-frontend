import { moduleForModel, test } from "ember-qunit";

moduleForModel("piso", "Unit | Model | piso", {
  // Specify the other units that are required for this test.
  needs: ["model:escuela"]
});

test("it exists", function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
