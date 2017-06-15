import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-form-input",
  "Integration | Component | suite form input",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-form-input etiqueta="Nombre Completo"}}`);
  assert.equal(this.$().text().trim(), "Nombre Completo");
});
