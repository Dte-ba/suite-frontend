import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("suite-tablas/personas", "Integration | Component | suite tablas/personas", {
  integration: true
});

test("it renders", function(assert) {
  this.set("pagina", 1);
  this.set("filtro", "filtrodemo");
  this.set("obtenerPersonas", {});
  this.set("limpiarParametros", () => {});

  this.render(hbs`

    {{suite-tablas/personas

      pagina=pagina
      filtro=filtro

      tarea=obtenerListaDePersonas
      alLimpiarTodosLosParametros=limpiarParametros
    }}
  `);

  assert.equal(this.$("input")[0].value, "filtrodemo");
});
