import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('robotica-lista-de-rutas', 'Integration | Component | robotica lista de rutas', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{robotica-lista-de-rutas}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#robotica-lista-de-rutas}}
      template block text
    {{/robotica-lista-de-rutas}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
