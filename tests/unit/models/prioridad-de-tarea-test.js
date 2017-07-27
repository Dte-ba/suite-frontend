import { moduleForModel, test } from 'ember-qunit';

moduleForModel('prioridad-de-tarea', 'Unit | Model | prioridad de tarea', {
  // Specify the other units that are required for this test.
  needs: [
    "model:tarea"
  ]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
