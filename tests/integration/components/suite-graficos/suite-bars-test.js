import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-graficos/suite-bars', 'Integration | Component | suite graficos/suite bars', {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{suite-graficos/suite-bars}}`);
  assert.equal(this.$().text().trim(), "");
});
