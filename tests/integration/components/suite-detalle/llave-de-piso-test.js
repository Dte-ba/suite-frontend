import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-detalle/llave-de-piso', 'Integration | Component | suite detalle/llave de piso', {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{suite-detalle/llave-de-piso}}`);
  assert.equal(this.$().text().trim(), "No se subió la llave");
});
