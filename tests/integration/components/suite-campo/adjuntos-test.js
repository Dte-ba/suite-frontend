import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-campo/adjuntos",
  "Integration | Component | suite campo/adjuntos",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("archivos", "demo.pdf");
  this.set("cuandoTermina", function() {});
  this.render(
    hbs`{{suite-campo/adjuntos archivos=archivos cuandoTerminaDeSubir=cuandoTermina}}`
  );
  assert.ok(this.$().text().trim());
});
