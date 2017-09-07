import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-estadisticas/eventos",
  "Integration | Component | suite estadisticas/eventos",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-estadisticas/eventos}}`);
  assert.ok(this.$().text().trim());
});
