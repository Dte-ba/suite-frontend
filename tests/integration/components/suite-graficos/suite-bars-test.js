import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("suite-graficos/suite-bars", "Integration | Component | suite graficos/suite bars", {
  integration: true
});

test("it renders", function(assert) {
  this.set("data", [
    {
      count: 10,
      name: "un texto"
    },
    {
      count: 40,
      name: "otro texto"
    }
  ]);
  this.render(hbs`{{suite-graficos/suite-bars data=data}}`);
  assert.ok(this.$().text());
});
