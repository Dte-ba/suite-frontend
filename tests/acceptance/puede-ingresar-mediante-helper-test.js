import { test } from "qunit";
import moduleForAcceptance from "suite-frontend/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | puede ingresar mediante helper");

test("visiting /puede-ingresar-mediante-helper", async function(assert) {
  await visit("/");
  await esperar(3);
  await assert.equal(currentURL(), "/login");
});
