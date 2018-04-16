import { moduleForModel, test } from 'ember-qunit';

moduleForModel('estado-de-validacion', 'Unit | Model | estado de validacion', {
  // Specify the other units that are required for this test.
  needs: ["model:validacion"]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
