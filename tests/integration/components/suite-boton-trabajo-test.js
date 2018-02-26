import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("suite-boton-trabajo", "Integration | Component | suite boton trabajo", {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{suite-boton-trabajo}}`);
  assert.ok(
    this.$()
      .text()
      .trim()
  );
});
