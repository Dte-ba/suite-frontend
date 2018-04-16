import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-estadisticas/paquetes",
  "Integration | Component | suite estadisticas/paquetes",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-estadisticas/paquetes}}`);
  assert.ok(this.$().text().trim());
});
