import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-texto-acortado', 'Integration | Component | suite texto acortado', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{suite-texto-acortado texto="demo"}}`);
  assert.equal(this.$().text().trim(), 'demo');

  let texto = `un texto muy largo, que se tiene que acortar`;

  this.set('texto', texto);

  this.render(hbs`{{suite-texto-acortado cantidad=6 texto=texto}}`);
  assert.equal(this.$().text().trim(), 'un tex ...');

});
