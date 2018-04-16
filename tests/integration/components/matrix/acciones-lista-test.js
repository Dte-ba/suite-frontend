import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "matrix/acciones-lista",
  "Integration | Component | matrix/acciones lista",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{matrix/acciones-lista}}`);
  assert.equal(this.$().text().trim(), "Enviar\nObjetar");
});
