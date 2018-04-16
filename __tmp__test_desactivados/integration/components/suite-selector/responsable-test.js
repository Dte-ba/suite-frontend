import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
import Ember from "ember";

moduleForComponent(
  "suite-selector/responsable",
  "Integration | Component | suite selector/responsable",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("cuandoSeleccionaResponsable", function() {});

  let mockPerfil = Ember.Object.extend({
    data: {
      idPerfil: 1
    },
    tienePermiso: function() {
      return true;
    }
  });

  this.register("service:perfil", mockPerfil);

  this.render(
    hbs`{{suite-selector/responsable cuandoSelecciona=cuandoSeleccionaResponsable}}`
  );
  assert.ok(this.$());
});
