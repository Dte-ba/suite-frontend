import { moduleFor, test } from "ember-qunit";

moduleFor("route:app/agenda/crear", "Unit | Route | app/agenda/crear", {
  needs: ["service:analytics", "service:perfil", "service:notificador"]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
