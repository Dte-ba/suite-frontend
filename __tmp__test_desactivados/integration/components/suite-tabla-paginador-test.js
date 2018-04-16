import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-tabla-paginador",
  "Integration | Component | suite tabla paginador",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("cuandoCambiaPagina", () => {});

  this.render(
    hbs`{{suite-tabla-paginador cuandoCambiaPagina=cuandoCambiaPagina}}`
  );

  assert.equal(
    this.$()
      .text()
      .trim(),
    ""
  );
});
