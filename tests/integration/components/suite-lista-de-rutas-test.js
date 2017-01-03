import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-lista-de-rutas', 'Integration | Component | suite lista de rutas', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-lista-de-rutas}}`);
  assert.equal(this.$('a').length, 2, "Hay solo dos rutas en la lista de links.");
});
