import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-detalle/cue-anteriores', 'Integration | Component | suite detalle/cue anteriores', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{suite-detalle/cue-anteriores}}`);
  assert.equal(this.$().text().trim(), 'No tiene');


  this.set('model', {subescuelas: [{cue: 3030}]});

  this.render(hbs`{{suite-detalle/cue-anteriores model=model}}`);
  assert.equal(this.$().text().trim(), '3030');
});
