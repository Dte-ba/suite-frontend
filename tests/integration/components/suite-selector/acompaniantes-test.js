import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("suite-selector/acompaniantes", "Integration | Component | suite selector/acompaniantes", {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{suite-selector/acompaniantes}}`);

  assert.equal(
    this.$()
      .text()
      .trim(),
    "Asignar a todo el equipo"
  );
});
