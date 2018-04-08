import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-boton-tarea', 'Integration | Component | suite boton tarea', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-boton-tarea}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-boton-tarea}}
      template block text
    {{/suite-boton-tarea}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
