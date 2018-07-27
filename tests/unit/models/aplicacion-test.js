import { moduleForModel, test } from "ember-qunit";

moduleForModel("aplicacion", "Unit | Model | aplicacion", {
  needs: ["model:perfil"]
});

test("it exists", function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
