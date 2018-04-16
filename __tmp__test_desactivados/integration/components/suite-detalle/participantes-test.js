import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-detalle/participantes', 'Integration | Component | suite detalle/participantes', {
  integration: true
});


test("it renders", function(assert) {
  this.render(hbs`{{suite-detalle/participantes}}`);
  assert.equal(this.$().text().trim(), "Sin acompañantes");
});
