import { test } from "qunit";
import moduleForAcceptance from "suite-frontend/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | al crear eventos completa el campo responsable automáticamente");

test("al-crear-un-evento-se-completa-el-responsable-automaticamente", async function(assert) {
  cargarDatosDePrueba();

  await login();
  await esperar(3);
  await click(".seccion-agenda");

  assert.equal(currentURL(), "/app/agenda/index/lista");

  await click("#crearEvento");

  assert.ok($(".selectorDePerfil")[0].innerText, "Tiene que aparecer completado el campo responsable");
  assert.ok($(".selectorDePerfil")[0].innerText.indexOf("Nombre Apellido") > -1);
});
