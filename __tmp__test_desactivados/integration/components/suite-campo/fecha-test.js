import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-campo/fecha",
  "Integration | Component | suite campo/fecha",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-campo/fecha}}`);
  assert.equal(this.$("input").attr("placeholder"), "Seleccione fecha");

  this.render(hbs`{{suite-campo/fecha fecha="2017-07-18"}}`);
  assert.equal(this.$("input").val(), "18/07/2017");
});
