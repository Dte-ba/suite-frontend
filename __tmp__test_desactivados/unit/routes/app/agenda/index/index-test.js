import { moduleFor, test } from "ember-qunit";

moduleFor("route:app/agenda/index/index", "Unit | Route | app/agenda/index/index", {
  needs: ["service:analytics", "service:perfil", "service:notificador"]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
