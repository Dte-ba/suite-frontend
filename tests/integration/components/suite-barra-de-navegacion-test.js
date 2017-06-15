import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-barra-de-navegacion",
  "Integration | Component | suite barra de navegacion",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-barra-de-navegacion}}`);
  assert.ok(this.$().text());
});
