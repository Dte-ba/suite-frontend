import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-estadisticas/escuelas",
  "Integration | Component | suite estadisticas/escuelas",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("tarea", {
    isRunning: false,
    value: {
      data: {
        pisoRoto: 30,
        abiertas: 20
      }
    }
  });

  this.render(hbs`{{suite-estadisticas/escuelas tarea=tarea}}`);
  assert.ok(this.$().text().indexOf("30") > -1);
  assert.ok(this.$().text().indexOf("20") > -1);
  assert.ok(this.$().text().indexOf("Escuelas abiertas") > -1);
});
