import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
import Ember from "ember";

moduleForComponent(
  "suite-vista-escuela",
  "Integration | Component | suite vista escuela",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  this.set("model", Ember.Object.create({}));
  this.set("crearContactoParaEstaEscuela", () => {});
  this.set("crearEventoParaEstaEscuela", () => {});

  this.render(
    hbs`{{suite-vista-escuela model=model crearContactoParaEstaEscuela=crearContactoParaEstaEscuela crearEventoParaEstaEscuela=crearEventoParaEstaEscuela}}`
  );

  assert.ok(this.$());
});
