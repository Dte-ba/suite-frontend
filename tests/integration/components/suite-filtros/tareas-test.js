import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("suite-filtros/tareas", "Integration | Component | suite filtros/tareas", {
  integration: true
});

test("it renders", function(assert) {
  this.set("cuandoSeleccionaRegion", function() {});
  this.set("alIngresarFiltro", function() {});
  this.set("limpiarFiltros", function() {});
  this.set("cuandoSeleccionaEstado", function() {});

  this.render(hbs`{{suite-filtros/tareas
    filtro=""
    cuandoSeleccionaRegion=cuandoSeleccionaRegion
    alIngresarFiltro=alIngresarFiltro
    deshabilitarSeleccionDeRegion=false
    cuandoSeleccionaEstado=cuandoSeleccionaEstado
    limpiarFiltros=limpiarFiltros
  }}`);

  assert.ok(this.$().text());
});
