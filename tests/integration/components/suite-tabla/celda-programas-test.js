import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-tabla/celda-programas', 'Integration | Component | suite tabla/celda programas', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-tabla/celda-programas}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-tabla/celda-programas}}
      template block text
    {{/suite-tabla/celda-programas}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
