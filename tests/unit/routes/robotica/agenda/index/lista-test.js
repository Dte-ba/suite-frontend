import { moduleFor, test } from "ember-qunit";

moduleFor(
  "route:robotica/agenda/index/lista",
  "Unit | Route | robotica/agenda/index/lista",
  {
    needs: [
      "service:analytics",
      "service:perfil",
      "service:notificador",
      "service:ajax"
    ]
  }
);

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
