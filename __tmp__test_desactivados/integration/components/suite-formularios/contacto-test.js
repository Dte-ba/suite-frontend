import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-formularios/contacto",
  "Integration | Component | suite formularios/contacto",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("model", {
    nombre: "demo",
    validaciones: []
  });

  this.render(hbs`{{suite-formularios/contacto model=model}}`);
  assert.ok(this.$().text());
});
