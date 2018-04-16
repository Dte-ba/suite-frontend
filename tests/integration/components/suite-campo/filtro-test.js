import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-campo/filtro",
  "Integration | Component | suite campo/filtro",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("alBuscar", function() {});

  this.render(hbs`{{suite-campo/filtro alBuscar=alBuscar}}`);
  assert.ok(this.$().text().trim(), "Buscar");
});
