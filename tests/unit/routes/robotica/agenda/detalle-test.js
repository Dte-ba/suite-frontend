import { moduleFor, test } from "ember-qunit";

moduleFor(
  "route:robotica/agenda/detalle",
  "Unit | Route | robotica/agenda/detalle",
  {
    needs: ["service:analytics", "service:perfil", "service:notificador"]
  }
);

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
