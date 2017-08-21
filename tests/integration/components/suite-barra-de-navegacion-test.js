import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
import Ember from "ember";

moduleForComponent(
  "suite-barra-de-navegacion",
  "Integration | Component | suite barra de navegacion",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  let perfilStub = Ember.Service.extend({
    permisos: {
      "agenda.listar": true,
      "tareas.listar": false,
      "escuelas.listar": false
    },
    tienePermiso(permiso) {
      return this.permisos[permiso];
    }
  });

  this.register("service:perfil", perfilStub);
  this.inject.service("perfil");

  this.render(hbs`{{suite-barra-de-navegacion}}`);
  assert.ok(this.$().text());
});
