import { moduleForModel, test } from 'ember-qunit';

moduleForModel('paquete', 'Unit | Model | paquete', {
  // Specify the other units that are required for this test.
  needs: [
    "model:estadoDePaquete",
    "model:escuela"
  ]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
