import { moduleForModel, test } from 'ember-qunit';

moduleForModel('estado-de-paquete', 'Unit | Model | estado de paquete', {
  // Specify the other units that are required for this test.
  needs: [
    "model:paquete"
  ]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
