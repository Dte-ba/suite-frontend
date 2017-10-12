import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-detalle/financiamiento",
  "Integration | Component | suite detalle/financiamiento",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-detalle/financiamiento}}`);
  assert.equal(
    this.$().text().trim(),
    "No hay datos sobre el tipo de financiamiento"
  );

  this.set("model", {
    tipoDeFinanciamiento: [{ nombre: "Estatal" }, { nombre: "Provincial" }]
  });

  // Cuando se envia un modelo con programas, el componente los tiene que
  // que mostrar uno al lado del otro separados por comas.
  this.render(hbs`{{suite-detalle/financiamiento model=model}}`);
  assert.equal(
    this.$().text().replace(/\n/g, "").replace(/ +/g, " ").trim(),
    "Estatal , Provincial"
  );
});
