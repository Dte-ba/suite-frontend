import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('demo-analytics', 'Integration | Component | demo analytics', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{demo-analytics}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#demo-analytics}}
      template block text
    {{/demo-analytics}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
