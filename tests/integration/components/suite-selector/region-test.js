import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-selector/region",
  "Integration | Component | suite selector/region",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("cuandoSelecciona", function() {});

  this.render(hbs`{{suite-selector/region cuandoSelecciona=cuandoSelecciona}}`);
  assert.equal(this.$().text().trim(), "");
});
