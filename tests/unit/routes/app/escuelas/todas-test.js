import { moduleFor, test } from "ember-qunit";

moduleFor("route:app/escuelas/todas", "Unit | Route | app/escuelas/todas", {
  needs: [
    "service:ajax",
    "service:perfil",
    "service:analytics",
    "service:perfil",
    "service:notificador"
  ]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
