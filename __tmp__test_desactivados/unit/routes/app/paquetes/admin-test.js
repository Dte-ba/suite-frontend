import { moduleFor, test } from "ember-qunit";

moduleFor("route:app/paquetes/admin", "Unit | Route | app/paquetes/admin", {
  needs: [
    "service:ajax",
    "service:analytics",
    "service:perfil",
    "service:notificador"
  ]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
