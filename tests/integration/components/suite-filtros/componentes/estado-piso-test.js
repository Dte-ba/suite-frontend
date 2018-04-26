import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("suite-filtros/componentes/estado-piso", "Integration | Component | suite filtros/componentes/estado piso", {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{suite-filtros/componentes/estado-piso}}`);

  assert.equal(
    this.$()
      .text()
      .trim(),
    ""
  );
});
