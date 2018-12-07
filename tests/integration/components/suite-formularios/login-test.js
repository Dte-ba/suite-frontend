import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-formularios/login",
  "Integration | Component | suite formularios/login",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-formularios/login}}`);

  assert.ok(
    this.$()
      .text()
      .indexOf("Email") > -1,
    "Aparece especificado que tiene que usar el mail laboral."
  );
  assert.ok(
    this.$()
      .text()
      .indexOf("Contraseña") > -1,
    "Pide contraseña"
  );
});
