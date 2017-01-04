import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-form-dropdown', 'Integration | Component | suite form dropdown', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-form-dropdown etiqueta="demo"}}`);

  assert.equal(this.$().text().trim(), 'demo');
});
