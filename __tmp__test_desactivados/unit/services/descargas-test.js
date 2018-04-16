import { moduleFor, test } from "ember-qunit";

moduleFor("service:descargas", "Unit | Service | descargas", {
  needs: ["service:ajax"]
});

// Replace this with your real tests.
test("it exists", function(assert) {
  let service = this.subject();
  assert.ok(service);
});
