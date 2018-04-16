import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-campo/hora",
  "Integration | Component | suite campo/hora",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("hora", undefined);
  this.render(hbs`{{suite-campo/hora hora=hora}}`);

  assert.equal(this.$("input").attr("placeholder"), "Seleccione hora");

  this.set("hora", "09:35:00");
  this.render(hbs`{{suite-campo/hora hora=hora}}`);
  assert.equal(this.$("input").val(), "9:35");
});
