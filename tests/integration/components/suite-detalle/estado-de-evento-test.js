import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-detalle/estado-de-evento', 'Integration | Component | suite detalle/estado de evento', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-detalle/estado-de-evento}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-detalle/estado-de-evento}}
      template block text
    {{/suite-detalle/estado-de-evento}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
