import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("suite-usuario", "Integration | Component | suite usuario", {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{suite-usuario}}`);
  assert.ok(this.$().text());
});
