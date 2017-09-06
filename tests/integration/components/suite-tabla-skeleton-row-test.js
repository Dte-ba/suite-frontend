import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-tabla-skeleton-row",
  "Integration | Component | suite tabla skeleton row",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  // Si hay 3 columnas ...
  this.set("columnas", [{}, {}, {}]);
  this.render(hbs`{{suite-tabla-skeleton-row columnas=columnas}}`);

  // tienen que dibujarse 3 'td'
  assert.equal(this.$("td").length, 3);
});
