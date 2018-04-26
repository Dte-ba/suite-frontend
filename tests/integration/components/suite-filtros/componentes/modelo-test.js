import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-filtros/componentes/modelo",
  "Integration | Component | suite filtros/componentes/modelo",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("nombre", "distrito");
  this.render(hbs`{{suite-filtros/componentes/modelo nombre=nombre}}`);

  assert.equal(
    this.$()
      .text()
      .trim(),
    "distrito"
  );
});
