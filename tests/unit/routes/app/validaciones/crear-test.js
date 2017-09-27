import { moduleFor, test } from "ember-qunit";

moduleFor(
  "route:app/validaciones/crear",
  "Unit | Route | app/validaciones/crear",
  {
    needs: [
      "service:ajax",
      "service:perfil",
      "service:analytics",
      "service:perfil",
      "service:notificador"
    ]
  }
);

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
