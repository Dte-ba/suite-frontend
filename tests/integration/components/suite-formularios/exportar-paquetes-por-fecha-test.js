import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-formularios/exportar-paquetes-por-fecha",
  "Integration | Component | suite formularios/exportar paquetes por fecha",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-formularios/exportar-paquetes-por-fecha}}`);
  assert.ok(this.$().text().trim());
});
