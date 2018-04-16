import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("suite-codigo", "Integration | Component | suite codigo", {
  integration: true
});

test("it renders", function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{suite-codigo}}`);

  assert.equal(this.$().text().trim(), "");

  // Template block usage:
  this.render(hbs`
    {{#suite-codigo}}
      template block text
    {{/suite-codigo}}
  `);

  assert.equal(this.$().text().trim(), "template block text");
});
