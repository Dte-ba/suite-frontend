import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-tabla/columna",
  "Integration | Component | suite tabla/columna",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-tabla/columna}}`);
  assert.equal(
    this.$()
      .text()
      .trim(),
    ""
  );
});
