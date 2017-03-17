import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-formularios/usuario', 'Integration | Component | suite formularios/usuario', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-formularios/usuario}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-formularios/usuario}}
      template block text
    {{/suite-formularios/usuario}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
