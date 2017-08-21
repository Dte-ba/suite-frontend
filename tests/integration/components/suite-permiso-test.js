import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
import Ember from "ember";

moduleForComponent("suite-permiso", "Integration | Component | suite permiso", {
  integration: true
});

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

  assert.expectAssertion(() => {
    this.render(hbs`{{suite-permiso}}`);
  }, /Assertion Failed: Falta especificar el permiso/);

  this.render(hbs`
    {{#suite-permiso permiso='agenda.listar'}}
      demo
    {{/suite-permiso}}
  `);

  assert.equal(this.$().text().trim(), "demo");
});
