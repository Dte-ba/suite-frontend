import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-tabla-escuelas",
  "Integration | Component | suite tabla escuelas",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-tabla-escuelas}}`);
  assert.equal(this.$().text().trim(), "");
});
