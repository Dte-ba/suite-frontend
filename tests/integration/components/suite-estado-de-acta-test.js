import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-estado-de-acta', 'Integration | Component | suite estado de acta', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-estado-de-acta}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-estado-de-acta}}
      template block text
    {{/suite-estado-de-acta}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
