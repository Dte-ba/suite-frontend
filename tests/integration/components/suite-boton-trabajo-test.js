import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-boton-trabajo', 'Integration | Component | suite boton trabajo', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-boton-trabajo}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-boton-trabajo}}
      template block text
    {{/suite-boton-trabajo}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
