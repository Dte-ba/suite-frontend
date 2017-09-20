import { moduleFor, test } from "ember-qunit";

moduleFor(
  "route:app/validaciones/crear",
  "Unit | Route | app/validaciones/crear",
  {
    needs: ["service:ajax", "service:perfil"]
  }
);

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
