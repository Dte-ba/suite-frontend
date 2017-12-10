import { moduleFor, test } from "ember-qunit";

moduleFor("route:app/validaciones/index", "Unit | Route | app/validaciones/index", {
  needs: ["service:ajax", "service:analytics", "service:perfil", "service:notificador", "service:descargas"]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
