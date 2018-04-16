import { test } from "qunit";
import moduleForAcceptance from "suite-frontend/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | puede visitar la agenda");

test("Puede vistar la agenda y cargar un evento", async function(assert) {
  await login();
  await esperar();
  await click(".seccion-agenda");
  await assert.equal(currentURL(), "/app/agenda/index/lista");
});
