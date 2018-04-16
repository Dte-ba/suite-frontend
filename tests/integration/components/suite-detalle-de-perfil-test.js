import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-detalle-de-perfil', 'Integration | Component | suite detalle de perfil', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-detalle-de-perfil}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-detalle-de-perfil}}
      template block text
    {{/suite-detalle-de-perfil}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
