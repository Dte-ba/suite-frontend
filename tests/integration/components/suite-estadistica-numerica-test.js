import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-estadistica-numerica",
  "Integration | Component | suite estadistica numerica",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-estadistica-numerica}}`);
  assert.ok(
    this.$()
      .text()
      .trim()
  );
});
