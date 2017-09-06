import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-formularios/piso",
  "Integration | Component | suite formularios/piso",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-formularios/piso}}`);

  assert.ok(this.$().text().trim());
});
