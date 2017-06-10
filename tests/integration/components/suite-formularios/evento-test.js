import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-formularios/evento', 'Integration | Component | suite formularios/evento', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{suite-formularios/evento}}`);

  assert.ok(this.$().text().trim().indexOf('Título') > -1, 'Tiene que tener título');
  assert.ok(this.$().text().trim().indexOf('Fecha') > -1, 'Tiene que tener fecha de comienzo');

});
