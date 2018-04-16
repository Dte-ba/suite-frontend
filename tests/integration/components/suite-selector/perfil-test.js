import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-selector/perfil', 'Integration | Component | suite selector/perfil', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-selector/perfil}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-selector/perfil}}
      template block text
    {{/suite-selector/perfil}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
