import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-detalle/zip-paquete', 'Integration | Component | suite detalle/zip paquete', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-detalle/zip-paquete}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-detalle/zip-paquete}}
      template block text
    {{/suite-detalle/zip-paquete}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
