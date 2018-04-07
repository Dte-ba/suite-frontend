import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("suite-filtros", "Integration | Component | suite filtros", {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{suite-filtros}}`);
  assert.ok(
    this.$()
      .text()
      .indexOf("No has especificado") > -1
  );
});
