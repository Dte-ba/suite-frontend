import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-detalle/fecha-acciones-lista",
  "Integration | Component | suite detalle/fecha acciones lista",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  let fecha = new Date(2017, 8, 5);
  this.set("fecha", fecha);

  this.render(hbs`{{suite-detalle/fecha-acciones-lista fecha=fecha}}`);
  assert.equal(this.$().text().trim(), "05/09/2017");
});
