import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
import Ember from "ember";

moduleForComponent(
  "suite-filtros/eventos",
  "Integration | Component | suite filtros/eventos",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("cuandoSeleccionaRegion", function() {});
  this.set("cuandoSeleccionaResponsable", function() {});
  this.set("alIngresarFiltro", function() {});

  let mockPerfil = Ember.Object.extend({
    data: {
      idPerfil: 1
    },
    tienePermiso: function() {
      return true;
    }
  });

  this.register("service:perfil", mockPerfil);

  this.render(hbs`{{suite-filtros/eventos
    cuandoSeleccionaRegion=cuandoSeleccionaRegion
    cuandoSeleccionaResponsable=cuandoSeleccionaResponsable
    alIngresarFiltro=alIngresarFiltro
  }}`);

  assert.ok(this.$().text());
});
