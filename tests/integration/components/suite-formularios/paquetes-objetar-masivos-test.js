import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-formularios/paquetes-objetar-masivos",
  "Integration | Component | suite formularios/paquetes objetar masivos",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("model", {});
  this.set("on-submit", function() {});

  this.render(
    hbs`{{suite-formularios/paquetes-objetar-masivos model=model on-submit="on-sumit"}}`
  );
  assert.ok(
    this.$()
      .text()
      .trim()
  );
});
