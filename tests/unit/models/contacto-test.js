import { moduleForModel, test } from "ember-qunit";

moduleForModel("contacto", "Unit | Model | contacto", {
  // Specify the other units that are required for this test.
  needs: ["model:escuela", "model:cargo-escolar"]
});

test("it exists", function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
