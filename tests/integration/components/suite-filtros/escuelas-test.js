import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-filtros/escuelas",
  "Integration | Component | suite filtros/escuelas",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("cuandoSeleccionaRegion", function() {});
  this.set("alIngresarFiltro", function() {});

  this.render(hbs`{{suite-filtros/escuelas
    cuandoSeleccionaRegion=cuandoSeleccionaRegion
    alIngresarFiltro=alIngresarFiltro
  }}`);

  assert.ok(this.$().text());
});
