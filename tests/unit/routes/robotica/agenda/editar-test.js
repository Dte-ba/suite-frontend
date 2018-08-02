import { moduleFor, test } from "ember-qunit";

moduleFor(
  "route:robotica/agenda/editar",
  "Unit | Route | robotica/agenda/editar",
  {
    needs: ["service:analytics", "service:perfil", "service:notificador"]
  }
);

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
