import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-filtros/personas', 'Integration | Component | suite filtros/personas', {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{suite-filtros/personas}}`);
  assert.equal(this.$().text().trim(), "Buscar");
});
