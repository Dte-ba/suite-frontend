import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-estadisticas/validaciones",
  "Integration | Component | suite estadisticas/validaciones",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-estadisticas/validaciones}}`);
  assert.ok(this.$().text().trim());
});
