import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-filtros/paquetes', 'Integration | Component | suite filtros/paquetes', {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{suite-filtros/paquetes}}`);
  assert.equal(this.$().text().trim(), "Buscar");
});
