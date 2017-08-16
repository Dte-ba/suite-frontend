import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-detalle/programas",
  "Integration | Component | suite detalle/programas",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.render(hbs`{{suite-detalle/programas}}`);
  assert.equal(this.$().text().trim(), "Sin programas");

  this.set("model", {
    programas: [
      { nombre: "Conectar Igualdad" },
      { nombre: "Escuelas del futuro" }
    ]
  });

  // Cuando se envia un modelo con programas, el componente los tiene que
  // que mostrar uno al lado del otro separados por comas.
  this.render(hbs`{{suite-detalle/programas model=model}}`);
  assert.equal(this.$().text().replace(/\n/g, "").replace(/ +/g, ' ').trim(), "Conectar Igualdad , Escuelas del futuro");
});
