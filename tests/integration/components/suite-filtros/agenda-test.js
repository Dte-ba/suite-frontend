import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
import Ember from "ember";

moduleForComponent(
  "suite-filtros/agenda",
  "Integration | Component | suite filtros/agenda",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  let perfilStub = Ember.Service.extend({
    data: {
      idPerfil: 1
    },
    permisos: {
      "agenda.listar": true,
      "tareas.listar": false,
      "escuelas.listar": false
    },
    tienePermiso(permiso) {
      return this.permisos[permiso];
    },
    obtenerRegion() {
      return Ember.Object.create({
        numero: 27
      });
    }
  });

  this.register("service:perfil", perfilStub);
  this.inject.service("perfil");

  this.set("cuandoSeleccionaRegion", () => {});
  this.set("cuandoSeleccionaResponsable", () => {});

  this.render(
    hbs`{{suite-filtros/agenda
      cuandoSeleccionaRegion=cuandoSeleccionaRegion
      cuandoSeleccionaResponsable=cuandoSeleccionaResponsable
    }}`
  );

  assert.ok(this.$());
});
