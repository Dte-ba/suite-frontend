import { moduleFor, test } from "ember-qunit";

moduleFor("service:perfil", "Unit | Service | perfil", {
  needs: ["service:ajax"]
});

test("it exists", function(assert) {
  let service = this.subject();
  assert.ok(service);
});
