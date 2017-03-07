import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-formularios/evento', 'Integration | Component | suite formularios/evento', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-formularios/evento}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-formularios/evento}}
      template block text
    {{/suite-formularios/evento}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
