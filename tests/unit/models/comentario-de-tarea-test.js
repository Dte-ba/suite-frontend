import { moduleForModel, test } from 'ember-qunit';

moduleForModel('comentario-de-tarea', 'Unit | Model | comentario de tarea', {
  // Specify the other units that are required for this test.
  needs: [
    "model:tarea",
    "model:perfil"
  ]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
