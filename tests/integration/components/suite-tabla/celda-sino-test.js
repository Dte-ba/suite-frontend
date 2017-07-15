import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-tabla/celda-sino",
  "Integration | Component | suite tabla/celda sino",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-tabla/celda-sino valor=true}}`);
  assert.equal(this.$().text().trim(), "Sí");

  this.render(hbs`{{suite-tabla/celda-sino valor=false}}`);
  assert.equal(this.$().text().trim(), "No");
});
