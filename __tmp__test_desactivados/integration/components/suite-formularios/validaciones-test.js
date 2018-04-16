import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-formularios/validaciones",
  "Integration | Component | suite formularios/validaciones",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-formularios/validaciones}}`);
  assert.ok(this.$().text());
});
