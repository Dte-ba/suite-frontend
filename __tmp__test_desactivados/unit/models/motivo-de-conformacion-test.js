import { moduleForModel, test } from 'ember-qunit';

moduleForModel('motivo-de-conformacion', 'Unit | Model | motivo de conformacion', {
  // Specify the other units that are required for this test.
  needs: ["model:escuela"]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
