import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-detalle/aplicaciones",
  "Integration | Component | suite detalle/aplicaciones",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-detalle/aplicaciones}}`);
  assert.equal(
    this.$()
      .text()
      .trim(),
    "Sin sistema asignado"
  );

  this.set("model", {
    aplicaciones: [{ nombre: "SUITE" }, { nombre: "Robótica" }]
  });

  // Cuando se envia un modelo con aplicaciones, el componente los tiene que
  // que mostrar uno al lado del otro separados por comas.
  this.render(hbs`{{suite-detalle/aplicaciones model=model}}`);
  assert.equal(
    this.$()
      .text()
      .replace(/\n/g, "")
      .replace(/ +/g, " ")
      .trim(),
    "SUITE , Robótica"
  );
});
