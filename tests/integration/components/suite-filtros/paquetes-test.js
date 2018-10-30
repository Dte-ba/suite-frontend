import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-filtros/paquetes",
  "Integration | Component | suite filtros/paquetes",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("cuandoSeleccionaRegion", function() {});
  this.set("cuandoSeleccionaResponsable", function() {});
  this.set("alIngresarFiltro", function() {});

  this.render(hbs`{{suite-filtros/paquetes
    cuandoSeleccionaRegion=cuandoSeleccionaRegion
    cuandoSeleccionaResponsable=cuandoSeleccionaResponsable
    alIngresarFiltro=alIngresarFiltro
  }}`);

  assert.ok(this.$().text());
});
