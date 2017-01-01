import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-tabla', 'Integration | Component | suite tabla', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{suite-tabla}}`);
  assert.ok(this.$().text().trim());
});
