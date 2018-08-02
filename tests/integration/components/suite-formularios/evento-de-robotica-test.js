import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-formularios/evento-de-robotica",
  "Integration | Component | suite formularios/evento de robotica",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("model", {
    titulo: []
  });
  this.render(hbs`{{suite-formularios/evento-de-robotica model=model}}`);

  assert.ok(
    this.$()
      .text()
      .trim()
      .indexOf("Fecha") > -1,
    "Tiene que tener fecha de comienzo"
  );
});
