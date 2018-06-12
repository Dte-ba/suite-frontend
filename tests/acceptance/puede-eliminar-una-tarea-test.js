import { test } from "qunit";
import moduleForAcceptance from "suite-frontend/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | puede eliminar una tarea");

test("visiting /puede-eliminar-una-tarea", async function(assert) {
  cargarDatosDePrueba();
  await visit("/");

  assert.equal(currentURL(), "/login", "Ingreso correctamente");
  await login();
  await esperar();

  await click(".seccion-tareas");

  await assert.equal(currentURL(), "/app/tareas");
  await click("td a:first");

  await esperar();
  await click("[data-test-eliminar]");
  await esperar();

  await click("[data-test-confirmar]");
  await assert.equal(currentURL(), "/app/tareas");
});
