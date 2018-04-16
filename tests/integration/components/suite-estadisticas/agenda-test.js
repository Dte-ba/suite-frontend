import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-estadisticas/agenda",
  "Integration | Component | suite estadisticas/agenda",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-estadisticas/agenda}}`);
  assert.equal(this.$().text().trim(), "WIP");
});
