import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-estadisticas/agenda', 'Integration | Component | suite estadisticas/agenda', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-estadisticas/agenda}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-estadisticas/agenda}}
      template block text
    {{/suite-estadisticas/agenda}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
