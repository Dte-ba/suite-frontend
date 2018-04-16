import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("suite-modal", "Integration | Component | suite modal", {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`{{#suite-modal}}demo{{/suite-modal}}`);

  assert.equal(
    this.$()
      .text()
      .trim(),
    ""
  );

  this.render(hbs`
    {{#suite-modal mostrar=true}}
      template block text
    {{/suite-modal}}
  `);

  assert.equal(
    this.$()
      .text()
      .trim(),
    "template block text"
  );
});
