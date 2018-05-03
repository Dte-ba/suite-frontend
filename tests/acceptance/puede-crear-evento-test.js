import { test } from "qunit";
import moduleForAcceptance from "suite-frontend/tests/helpers/module-for-acceptance";
import registerPowerSelectHelpers from "../../tests/helpers/ember-power-select";

registerPowerSelectHelpers();

moduleForAcceptance("Acceptance | puede crear evento");

test("Puede crear un evento correctamente", async function(assert) {
  cargarDatosDePrueba();

  await login();
  await esperar(3);

  await click(".seccion-agenda");

  assert.equal(currentURL(), "/app/agenda/index/lista");

  await click("#crearEvento");

  fillIn("[name='titulo']", "Evento de prueba");
  await click("[type='submit']");

  // Hay exactamente 3 errores de validación.
  assert.equal($(".field.error").length, 3);

  // Luego se cargan datos válidos
  fillIn("[placeholder='Seleccione hora']:first", "14:00");
  fillIn("[placeholder='Seleccione hora']:last", "16:00");

  fillIn("[name='cantidadDeParticipantes']", 0);
  fillIn("[name='objetivo']", "Un objetivo de prueba");

  await selectSearch(".selectorDePerfil", "demo");

  await selectChoose(".selectorDePerfil", "Nombre Apellido");

  await selectSearch(".selectorDeEscuela", "123123");

  await selectChoose(".selectorDeEscuela", "Escuela N° 10 - General José de San Martín");

  await selectChoose(".selectorAgrupable", "Sin categoría");

  /* Con los datos cargados, tiene que permitir agendar */
  await clickSobreElTexto("Agendar");

  await esperar(3);

  /* Y el usuario debe quedar en la vista de detalle del evento */
  assert.equal(currentURL(), "/app/agenda/detalle/1");
});
