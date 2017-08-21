import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-detalle/autor",
  "Integration | Component | suite detalle/autor",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("model", {
    autor: {
      nombre: "Ceferino",
      apellido: "Acosta"
    }
  });

  this.render(hbs`{{suite-detalle/autor model=model}}`);
  assert.equal(this.$().text().trim(), "Acosta, Ceferino");
});
