import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-detalle/fecha-acciones-lista', 'Integration | Component | suite detalle/fecha acciones lista', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-detalle/fecha-acciones-lista}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-detalle/fecha-acciones-lista}}
      template block text
    {{/suite-detalle/fecha-acciones-lista}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
