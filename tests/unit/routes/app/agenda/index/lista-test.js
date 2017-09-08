import { moduleFor, test } from "ember-qunit";

moduleFor(
  "route:app/agenda/index/lista",
  "Unit | Route | app/agenda/index/lista",
  {
    needs: ["service:ajax", "service:perfil"]
  }
);

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
