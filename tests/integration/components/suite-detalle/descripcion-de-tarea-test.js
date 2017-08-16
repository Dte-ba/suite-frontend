import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-detalle/descripcion-de-tarea', 'Integration | Component | suite detalle/descripcion de tarea', {
  integration: true
});

test('it renders', function(assert) {
  this.set('model', {descripcion: "demo"})

  this.render(hbs`{{suite-detalle/descripcion-de-tarea model=model}}`);
  assert.equal(this.$().text().trim(), 'demo');
});
