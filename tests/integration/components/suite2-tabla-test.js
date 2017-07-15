import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite2-tabla', 'Integration | Component | suite2 tabla', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite2-tabla}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite2-tabla}}
      template block text
    {{/suite2-tabla}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
