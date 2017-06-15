import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("suite-error", "Integration | Component | suite error", {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{suite-error}}`);
  assert.ok(this.$().text().trim());
});
