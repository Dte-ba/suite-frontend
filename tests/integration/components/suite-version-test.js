import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("suite-version", "Integration | Component | suite version", {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{suite-version}}`);
  assert.ok(this.$().text());
});
