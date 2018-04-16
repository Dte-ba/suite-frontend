import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-depuracion-login",
  "Integration | Component | suite depuracion login",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-depuracion-login}}`);

  assert.ok(this.$().text());
});
