import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-formularios/clave",
  "Integration | Component | suite formularios/clave",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-formularios/clave}}`);
  assert.ok(
    this.$()
      .text()
      .trim()
  );
});
