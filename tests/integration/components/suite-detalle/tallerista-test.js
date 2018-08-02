import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-detalle/tallerista",
  "Integration | Component | suite detalle/tallerista",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("model", {
    tallerista: {
      nombre: "Ceferino",
      apellido: "Acosta"
    }
  });

  this.set("perfil", {
    tienePermiso: function() {
      return true;
    }
  });

  this.render(hbs`{{suite-detalle/tallerista model=model perfil=perfil}}`);
  assert.equal(
    this.$()
      .text()
      .trim(),
    "Ceferino Acosta ()"
  );
});
