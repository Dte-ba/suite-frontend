import { moduleForModel, test } from 'ember-qunit';

moduleForModel('tarea', 'Unit | Model | tarea', {
  // Specify the other units that are required for this test.
  needs: [
    "model:prioridadDeTarea",
    "model:estadoDeTarea",
    "model:motivoTarea",
    "model:perfil",
    "model:escuela"
  ]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
