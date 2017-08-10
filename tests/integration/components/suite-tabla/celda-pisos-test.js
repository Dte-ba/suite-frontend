import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-tabla/celda-pisos', 'Integration | Component | suite tabla/celda pisos', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-tabla/celda-pisos}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-tabla/celda-pisos}}
      template block text
    {{/suite-tabla/celda-pisos}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
