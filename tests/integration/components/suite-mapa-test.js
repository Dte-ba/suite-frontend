import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("suite-mapa", "Integration | Component | suite mapa", {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{suite-mapa}}`);
  assert.equal(
    this.$()
      .text()
      .trim(),
    "Sin datos de ubicación"
  );

  this.render(hbs`{{suite-mapa lat=50 lng=30}}`);
  assert.equal(
    this.$()
      .text()
      .trim(),
    "Sin datos de ubicación"
  );
});
