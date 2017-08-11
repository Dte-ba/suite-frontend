import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-graficos/suite-bars', 'Integration | Component | suite graficos/suite bars', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-graficos/suite-bars}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-graficos/suite-bars}}
      template block text
    {{/suite-graficos/suite-bars}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
