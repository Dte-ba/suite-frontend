import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("suite-form", "Integration | Component | suite form", {
  integration: true
});

test("it renders", function(assert) {
  // Prueba que funcione emita un mensaje de advertencia.
  this.render(hbs`{{suite-form}}`);
  assert.equal(
    this.$().text().trim(),
    "El formulario ha sido inicializado incorrectamente, defina un valor para el parametro data."
  );

  // Prueba que funcione se puedan definir los textos para el botón guardar.
  this.set("data", { textos: { guardar: "Guardar datos de esta escuela" } });
  this.render(hbs`{{suite-form data=data}}`);
  assert.equal(this.$().text().trim(), "Guardar datos de esta escuela");

  // Dado un formulario con un solo campo, espera que aparezca correctamente.
  let data = {
    campos: [
      {
        nombre: "nombreCompleto",
        etiqueta: "Nombre completo",
        ejemplo: "Juan Perez",
        tipo: "input",
        validaciones: ["novacio", "masde5letras"]
      }
    ]
  };

  this.set("data", data);
  this.render(hbs`{{suite-form data=data}}`);
  let textos = this.$().text().trim().split("   ").map(t => {
    return t.trim();
  });

  assert.deepEqual(textos, ["Nombre completo", "Guardar"]);
});
