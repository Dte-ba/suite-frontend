import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("suite-boton", "Integration | Component | suite boton", {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{suite-boton texto="iniciar"}}`);
  assert.equal(
    this.$()
      .text()
      .trim(),
    "iniciar"
  );

  this.render(hbs`{{#suite-boton}}contenido{{/suite-boton}}`);
  assert.equal(
    this.$()
      .text()
      .trim(),
    "contenido"
  );
});
