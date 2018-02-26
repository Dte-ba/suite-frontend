import { test } from "qunit";
import moduleForAcceptance from "suite-frontend/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | puede buscar personas y regresar conservando filtros");

test("visiting /puede-buscar-personas-y-observar-que-conserva-filtros", async function(assert) {
  await visit("/app");

  await login();
  await esperar(3);

  await click(".seccion-personas");

  assert.equal(currentURL(), "/app/personas");
  fillIn(".filtro", "persona");
  await click(".buscar");

  assert.equal(currentURL(), "/app/personas?filtro=persona");

  // Pulsa la primer celda, con el nombre del usuario.
  await clickSobreElTexto("Apellido, Nombre");

  assert.equal(currentURL(), "/app/personas/detalle/1");
});
