import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-tabla-error-de-api', 'Integration | Component | suite tabla error de api', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-tabla-error-de-api}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-tabla-error-de-api}}
      template block text
    {{/suite-tabla-error-de-api}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
