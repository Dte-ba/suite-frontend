import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-listado-de-permisos",
  "Integration | Component | suite listado de permisos",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-listado-de-permisos}}`);
  assert.ok(this.$().text().trim());
});
