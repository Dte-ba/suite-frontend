import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-errores-de-formulario', 'Integration | Component | suite errores de formulario', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-errores-de-formulario}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-errores-de-formulario}}
      template block text
    {{/suite-errores-de-formulario}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
