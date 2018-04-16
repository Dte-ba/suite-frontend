import { moduleForModel, test } from "ember-qunit";

moduleForModel("group", "Unit | Model | group", {
  needs: ["model:perfil"]
});

test("it exists", function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
