import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-selector/agrupable",
  "Integration | Component | suite selector/categoria",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("valores", []);
  this.set("cuandoSelecciona", function() {});
  this.render(hbs`{{suite-selector/agrupable
      valores=valores
      cuandoSelecciona=cuandoSelecciona}}`);
  assert.equal(this.$().text().trim(), "");
});
