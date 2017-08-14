import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-graficos/suite-pie-chart",
  "Integration | Component | suite graficos/suite pie chart",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("data", [{ label: "demo", count: "demo" }]);
  this.render(hbs`{{suite-graficos/suite-pie-chart data=data}}`);

  assert.equal(
    this.$().find("text").text(),
    "demo",
    "El elemento generado dice demo"
  );
});
