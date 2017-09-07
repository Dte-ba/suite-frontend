import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-filtros/validaciones",
  "Integration | Component | suite filtros/validaciones",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("alIngresarFiltro", function() {});
  this.render(
    hbs`{{suite-filtros/validaciones alIngresarFiltro=alIngresarFiltro}}`
  );
  assert.equal(this.$().text().trim(), "Buscar");
});
