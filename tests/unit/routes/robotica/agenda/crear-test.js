import { moduleFor, test } from "ember-qunit";

moduleFor(
  "route:robotica/agenda/crear",
  "Unit | Route | robotica/agenda/crear",
  {
    needs: ["service:analytics", "service:perfil", "service:notificador"]
  }
);

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
