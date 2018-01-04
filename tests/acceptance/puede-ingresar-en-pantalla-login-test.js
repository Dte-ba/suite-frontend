import { test } from "qunit";
import moduleForAcceptance from "suite-frontend/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | puede ingresar en pantalla login");

test("visiting /app", async function(assert) {
  await visit("/app");
  assert.equal(currentURL(), "/login");
  await login();
  await esperar();
  assert.equal(currentURL(), "/app/escritorio");
});
