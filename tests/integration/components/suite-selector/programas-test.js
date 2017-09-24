import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-selector/programas",
  "Integration | Component | suite selector/programas",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("cuandoSelecciona", () => {});

  this.render(
    hbs`{{suite-selector/programas cuandoSelecciona=(action cuandoSelecciona)}}`
  );
  assert.equal(this.$().text().trim(), "");
});
