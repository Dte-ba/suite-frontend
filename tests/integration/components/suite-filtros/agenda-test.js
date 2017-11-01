import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-filtros/agenda",
  "Integration | Component | suite filtros/agenda",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("cuandoSeleccionaRegion", () => {});
  this.render(
    hbs`{{suite-filtros/agenda cuandoSeleccionaRegion=cuandoSeleccionaRegion}}`
  );

  assert.equal(
    this.$()
      .text()
      .trim(),
    ""
  );
});
