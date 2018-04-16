import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-ajustar-celda', 'Integration | Component | suite ajustar celda', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{suite-ajustar-celda ajustar=true}}`);
  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#suite-ajustar-celda}}
      template block text
    {{/suite-ajustar-celda}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
