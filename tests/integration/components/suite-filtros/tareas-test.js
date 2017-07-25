import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-filtros/tareas', 'Integration | Component | suite filtros/tareas', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-filtros/tareas}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-filtros/tareas}}
      template block text
    {{/suite-filtros/tareas}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
