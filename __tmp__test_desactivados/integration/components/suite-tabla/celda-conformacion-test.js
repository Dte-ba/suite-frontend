import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-tabla/celda-conformacion', 'Integration | Component | suite tabla/celda conformacion', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-tabla/celda-conformacion}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-tabla/celda-conformacion}}
      template block text
    {{/suite-tabla/celda-conformacion}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
