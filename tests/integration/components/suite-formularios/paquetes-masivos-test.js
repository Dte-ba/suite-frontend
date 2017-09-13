import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-formularios/paquetes-masivos",
  "Integration | Component | suite formularios/paquetes masivos",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("model", {});
  this.set("on-submit", function() {});

  this.render(
    hbs`{{suite-formularios/paquetes-masivos model=model on-submit="on-sumit"}}`
  );
  assert.ok(this.$().text().trim());
});
