import { moduleFor, test } from "ember-qunit";

moduleFor("route:app/escuelas/index", "Unit | Route | app/escuelas/index", {
  needs: ["service:ajax", "service:perfil"]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
