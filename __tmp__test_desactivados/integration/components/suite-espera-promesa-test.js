import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-espera-promesa', 'Integration | Component | suite espera promesa', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-espera-promesa}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-espera-promesa}}
      template block text
    {{/suite-espera-promesa}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
