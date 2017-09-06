import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-grafico-de-barras', 'Integration | Component | suite grafico de barras', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-grafico-de-barras}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-grafico-de-barras}}
      template block text
    {{/suite-grafico-de-barras}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
