import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "suite-estadisticas/tareas",
  "Integration | Component | suite estadisticas/tareas",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("tarea", {
    isRunning: false,
    value: {
      data: {
        pendientes: 40,
        total: 23
      }
    }
  });

  this.render(hbs`{{suite-estadisticas/tareas tarea=tarea}}`);

  assert.ok(this.$().text().indexOf("40") > -1);
  assert.ok(this.$().text().indexOf("23") > -1);
  assert.ok(this.$().text().indexOf("Pendientes") > -1);
});
