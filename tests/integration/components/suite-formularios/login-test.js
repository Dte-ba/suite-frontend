import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-formularios/login', 'Integration | Component | suite formularios/login', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-formularios/login}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-formularios/login}}
      template block text
    {{/suite-formularios/login}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
