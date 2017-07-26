import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-filtros/tareas', 'Integration | Component | suite filtros/tareas', {
  integration: true
});


test("it renders", function(assert) {
  this.render(hbs`{{suite-filtros/tareas}}`);
  assert.equal(this.$().text().trim(), "Buscar");
});
