import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-filtros/componentes/input",
  "Integration | Component | suite filtros/componentes/input",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("accion", function() {});
  this.render(hbs`{{suite-filtros/componentes/input accion=accion}}`);

  assert.equal(
    this.$()
      .text()
      .trim(),
    ""
  );
});
