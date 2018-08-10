import { moduleForModel, test } from "ember-qunit";

moduleForModel("evento-de-robotica", "Unit | Model | evento de robotica", {
  needs: [
    "model:curso-de-robotica",
    "model:taller-de-robotica",
    "model:area-de-robotica",
    "model:seccion-de-robotica",
    "model:perfil",
    "model:escuela"
  ]
});

test("it exists", function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
