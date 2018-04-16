import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("plus-one", "helper:plus-one", {
  integration: true
});

test("it renders", function(assert) {
  this.set("inputValue", "1234");
  this.render(hbs`{{plus-one inputValue}}`);
  assert.equal(this.$().text().trim(), "1235");
});
