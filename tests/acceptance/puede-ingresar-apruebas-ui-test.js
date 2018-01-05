import { test } from "qunit";
import moduleForAcceptance from "suite-frontend/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | puede ingresar apruebas ui");

test("visiting /", async function(assert) {
  await visit("/");

  assert.equal(currentURL(), "/login", "Ingreso correctamente");
  await login();
  await esperar();

  await visit("/app/ui");

  assert.equal(currentURL(), "/app/ui");
  assert.equal($(".main h1").text(), "Galería UI", "Aparece el título de la sección de pruebas.");
  await esperar();

  clickSobreElTexto("Tablas");
  await esperar();

  assert.equal($(".pagination a.active").text(), "1");
  clickSobreElTexto("3");
  await esperar();

  assert.equal($(".pagination a.active").text(), "3", "Logra visitar la página 3 de la tabla");
  clickSobreElTexto("1");
  await esperar();

  assert.equal($(".pagination a.active").text(), "1", "Logra visitar la página 1 de la tabla");
  clickSobreElTexto("Modales");
  await esperar();

  assert.equal(currentURL(), "/app/ui/modales", "Cambió correctamente a la ruta de los modales.");
  await esperar();
});
