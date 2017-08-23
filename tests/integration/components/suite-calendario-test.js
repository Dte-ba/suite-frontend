import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-calendario",
  "Integration | Component | suite calendario",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-calendario}}`);
  assert.ok(this.$().text());
});
