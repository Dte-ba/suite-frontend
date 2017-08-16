import { moduleForModel, test } from 'ember-qunit';

moduleForModel('programa', 'Unit | Model | programa', {
  needs: ['model:escuela']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
