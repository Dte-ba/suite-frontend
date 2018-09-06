import { moduleFor, test } from "ember-qunit";

moduleFor("route:robotica/informes", "Unit | Route | robotica/informes", {
  needs: [
    "service:analytics",
    "service:perfil",
    "service:notificador",
    "service:ajax"
  ]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
