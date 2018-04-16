import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-tabla-skeleton",
  "Integration | Component | suite tabla skeleton",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-tabla-skeleton}}`);
  assert.equal(this.$("tr").length, 10);
});
