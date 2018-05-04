import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("suite-formularios/simular-perfil", "Integration | Component | suite formularios/simular perfil", {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{suite-formularios/simular-perfil}}`);
  assert.ok(this.$().text());
});
