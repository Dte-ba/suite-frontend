import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("suite-fecha", "Integration | Component | suite fecha", {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{suite-fecha fecha='2017-10-13'}}`);
  assert.equal(this.$().text().trim(), "13/10/2017");
});
