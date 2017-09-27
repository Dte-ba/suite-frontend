import { moduleFor, test } from "ember-qunit";

moduleFor("route:logout", "Unit | Route | logout", {
  needs: [
    "service:session",
    "service:analytics",
    "service:perfil",
    "service:notificador"
  ]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
