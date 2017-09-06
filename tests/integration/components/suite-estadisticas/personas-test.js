import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-estadisticas/personas",
  "Integration | Component | suite estadisticas/personas",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-estadisticas/personas}}`);
  assert.ok(this.$().text().trim());
});
