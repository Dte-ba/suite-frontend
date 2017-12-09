import { moduleFor, test } from "ember-qunit";

moduleFor("route:app/escuelas/index", "Unit | Route | app/escuelas/index", {
  needs: ["service:ajax", "service:perfil", "service:analytics", "service:perfil", "service:notificador", "service:descargas"]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
