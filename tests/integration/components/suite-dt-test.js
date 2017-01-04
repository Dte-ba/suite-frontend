import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-dt', 'Integration | Component | suite dt', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-dt}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#suite-dt titulo="Demo"}}
    {{/suite-dt}}
  `);

  assert.equal(this.$().text().trim(), 'Demo', "imprime el título correctamente");

  this.render(hbs`
    {{#suite-dt}}
      a: 1
    {{/suite-dt}}
  `);

  assert.equal(this.$().text().trim().replace(' ', ''), 'a: 1', "Incluye el contenido");
});
