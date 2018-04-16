import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("suite-popup", "Integration | Component | suite popup", {
  integration: true
});

test("it renders", function(assert) {
  this.render(hbs`
    {{#suite-popup mostrar=true}}
      template block text
    {{/suite-popup}}
  `);

  assert.equal(
    this.$()
      .text()
      .trim(),
    "template block text"
  );

  this.render(hbs`
    {{#suite-popup mostrar=false}}
      template block text
    {{/suite-popup}}
  `);

  assert.equal(
    this.$()
      .text()
      .trim(),
    ""
  );
});
