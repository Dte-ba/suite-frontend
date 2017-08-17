import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-selector/simple', 'Integration | Component | suite selector/simple', {
  integration: true
});

test('it renders', function(assert) {

  this.set('cuandoSelecciona', () => {

  });

  this.render(hbs`{{suite-selector/simple cuandoSelecciona=(action cuandoSelecciona)}}`);
  assert.equal(this.$().text().trim(), '');

});
