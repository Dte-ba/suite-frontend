import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-filtros/agenda', 'Integration | Component | suite filtros/agenda', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-filtros/agenda}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-filtros/agenda}}
      template block text
    {{/suite-filtros/agenda}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
