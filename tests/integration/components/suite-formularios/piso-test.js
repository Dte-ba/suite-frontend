import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-formularios/piso', 'Integration | Component | suite formularios/piso', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-formularios/piso}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-formularios/piso}}
      template block text
    {{/suite-formularios/piso}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
