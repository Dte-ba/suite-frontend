import { moduleForModel, test } from 'ember-qunit';

moduleForModel('tipo-de-gestion', 'Unit | Model | tipo de gestion', {
  // Specify the other units that are required for this test.
  needs: [
    "model:escuela"
  ]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
