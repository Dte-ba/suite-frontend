import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-graficos/suite-stacked-chart', 'Integration | Component | suite graficos/suite stacked chart', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-graficos/suite-stacked-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-graficos/suite-stacked-chart}}
      template block text
    {{/suite-graficos/suite-stacked-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
