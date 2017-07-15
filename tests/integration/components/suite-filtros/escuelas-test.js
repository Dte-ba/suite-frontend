import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-filtros/escuelas",
  "Integration | Component | suite filtros/escuelas",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-filtros/escuelas}}`);
  assert.equal(this.$().text().trim(), "Buscar");
});
