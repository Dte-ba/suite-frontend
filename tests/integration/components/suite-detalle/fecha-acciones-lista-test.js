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
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  let hoy = "05/09/2017";

  this.set("model", { fecha: hoy });

  this.render(hbs`{{suite-detalle/fecha-acciones-lista}}`);

  assert.equal(this.$().text().trim(), "05/09/2017");
});
