import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("estado-de-acta", "helper:estado-de-acta", {
  integration: true
});

// Replace this with your real tests.
test("it renders", function(assert) {
  this.set("inputValue", "");

  this.render(hbs`{{estado-de-acta inputValue}}`);

  assert.equal(this.$().text().trim(), "");
});
