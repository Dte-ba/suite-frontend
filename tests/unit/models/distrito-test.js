import { moduleForModel, test } from "ember-qunit";

moduleForModel("distrito", "Unit | Model | distrito", {
  needs: ["model:localidad", "model:region"]
});

test("it exists", function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
