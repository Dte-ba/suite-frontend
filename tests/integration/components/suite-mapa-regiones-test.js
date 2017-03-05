import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-mapa-regiones', 'Integration | Component | suite mapa regiones', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-mapa-regiones}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#suite-mapa-regiones}}
      template block text
    {{/suite-mapa-regiones}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
