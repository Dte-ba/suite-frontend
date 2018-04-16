import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-estadisticas/paquetes-matrix",
  "Integration | Component | suite estadisticas/paquetes matrix",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-estadisticas/paquetes-matrix}}`);
  assert.ok(this.$().text().trim());
});
