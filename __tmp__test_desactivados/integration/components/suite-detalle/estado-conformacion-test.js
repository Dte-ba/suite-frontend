import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-detalle/estado-conformacion",
  "Integration | Component | suite detalle/estado conformacion",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-detalle/estado-conformacion}}`);
  assert.equal(this.$().text().trim(), "");
});
