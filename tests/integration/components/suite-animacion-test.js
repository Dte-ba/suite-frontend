import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-animacion', 'Integration | Component | suite animacion', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{suite-animacion}}`);
  assert.equal(this.$().text().trim(), '');
});
