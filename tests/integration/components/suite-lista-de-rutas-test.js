import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
import Ember from "ember";

moduleForComponent(
  "suite-lista-de-rutas",
  "Integration | Component | suite lista de rutas",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  let perfilStub = Ember.Service.extend({
    permisos: {
      "agenda.listar": true,
      "tareas.listar": true,
      "escuelas.listar": true
    },
    tienePermiso(permiso) {
      return this.permisos[permiso];
    }
  });

  this.register("service:perfil", perfilStub);
  this.inject.service("perfil");

  this.render(hbs`{{suite-lista-de-rutas}}`);
  assert.ok(
    this.$("a").length > 2,
    "Hay al menos dos rutas en la lista de links."
  );
});
