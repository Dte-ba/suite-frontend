import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-filtros/eventos', 'Integration | Component | suite filtros/eventos', {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{suite-filtros/eventos}}`);
  assert.equal(this.$().text().trim(), "Buscar");
});
