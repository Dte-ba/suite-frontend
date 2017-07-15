import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-tabla-simple",
  "Integration | Component | suite tabla simple",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-tabla-simple}}`);
  assert.ok(this.$().text().trim() === "");
});
