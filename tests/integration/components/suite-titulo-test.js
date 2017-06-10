import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-titulo', 'Integration | Component | suite titulo', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{suite-titulo}}`);
  assert.ok(this.$().text().trim().indexOf('Sin título') > -1, 'Muestra sin título si no especifica otra cosa');

  this.render(hbs`{{suite-titulo titulo="demo"}}`);
  assert.ok(this.$().text().trim().indexOf('demo') > -1, 'Puede dibujar un título');
});
