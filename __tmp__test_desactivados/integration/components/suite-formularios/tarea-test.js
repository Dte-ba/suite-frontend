import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-formularios/tarea",
  "Integration | Component | suite formularios/tarea",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-formularios/tarea}}`);

  assert.ok(this.$().text().trim());
});
