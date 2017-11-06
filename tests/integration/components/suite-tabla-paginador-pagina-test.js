import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-tabla-paginador-pagina",
  "Integration | Component | suite tabla paginador pagina",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("alPulsar", () => {});

  this.render(hbs`{{suite-tabla-paginador-pagina alPulsar=alPulsar}}`);
  assert.equal(
    this.$()
      .text()
      .trim(),
    ""
  );
});
