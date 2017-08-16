import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-detalle/fecha-de-ingreso', 'Integration | Component | suite detalle/fecha de ingreso', {
  integration: true
});

test('it renders', function(assert) {
  let hoy = new Date();

  this.set('model', {fechaDeIngreso: hoy});

  this.render(hbs`{{suite-detalle/fecha-de-ingreso model=model}}`);
  assert.ok(this.$().text().indexOf('hace unos segundos') > -1, "Incluye fecha relativa");
});
