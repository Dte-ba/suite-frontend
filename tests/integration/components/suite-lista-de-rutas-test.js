import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-lista-de-rutas",
  "Integration | Component | suite lista de rutas",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-lista-de-rutas}}`);
  assert.ok(
    this.$("a").length > 2,
    "Hay al menos dos rutas en la lista de links."
  );
});
