import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-detalle', 'Integration | Component | suite detalle', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{suite-detalle}}`);
  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#suite-detalle}}
      template block text
    {{/suite-detalle}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
