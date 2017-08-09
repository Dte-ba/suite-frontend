import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-filtros/validaciones', 'Integration | Component | suite filtros/validaciones', {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{suite-filtros/validaciones}}`);
  assert.equal(this.$().text().trim(), "Buscar");
});
