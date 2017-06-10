import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-formularios/usuario', 'Integration | Component | suite formularios/usuario', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{suite-formularios/usuario}}`);

  assert.ok(this.$().text().trim().indexOf('Datos personales') > -1, 'Tiene que el texto Datos Personales');

});
