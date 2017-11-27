import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-formularios/perfil",
  "Integration | Component | suite formularios/perfil",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-formularios/perfil}}`);
  assert.ok(this.$().text());
});
