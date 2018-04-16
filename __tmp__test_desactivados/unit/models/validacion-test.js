import { moduleForModel, test } from 'ember-qunit';

moduleForModel('validacion', 'Unit | Model | validacion', {
  // Specify the other units that are required for this test.
  needs: [
    "model:estadoDeValidacion",
    "model:perfil",
    "model:escuela"
    // "model:comentarioDeValidacion"
  ]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
