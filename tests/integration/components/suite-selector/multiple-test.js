import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-selector/multiple",
  "Integration | Component | suite selector/multiple",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("cuandoSelecciona", () => {});

  this.render(
    hbs`{{suite-selector/multiple cuandoSelecciona=(action cuandoSelecciona)}}`
  );
  assert.equal(this.$().text().trim(), "");
});
