import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-detalle/acta-de-evento",
  "Integration | Component | suite detalle/acta de evento",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-detalle/acta-de-evento}}`);
  assert.equal(this.$().text().trim(), "Sin Acta");
});
