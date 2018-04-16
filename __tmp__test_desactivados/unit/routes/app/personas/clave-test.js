import { moduleFor, test } from "ember-qunit";

moduleFor("route:app/personas/clave", "Unit | Route | app/personas/clave", {
  needs: ["service:analytics", "service:notificador", "service:perfil"]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
