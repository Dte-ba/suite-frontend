import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-detalle/responsable",
  "Integration | Component | suite detalle/responsable",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("model", {
    responsable: {
      nombre: "Ceferino",
      apellido: "Acosta"
    }
  });

  this.set("perfil", {
    tienePermiso: function() {
      return true;
    }
  });

  this.render(hbs`{{suite-detalle/responsable model=model perfil=perfil}}`);
  assert.equal(
    this.$()
      .text()
      .trim(),
    "Ceferino Acosta ()"
  );
});
