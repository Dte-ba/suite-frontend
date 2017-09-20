import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-detalle/estado-de-validacion', 'Integration | Component | suite detalle/estado de validacion', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-detalle/estado-de-validacion}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-detalle/estado-de-validacion}}
      template block text
    {{/suite-detalle/estado-de-validacion}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
