import { test } from "qunit";
import moduleForAcceptance from "suite-frontend/tests/helpers/module-for-acceptance";
import registerPowerSelectHelpers from "../../tests/helpers/ember-power-select";

registerPowerSelectHelpers();

moduleForAcceptance("Acceptance | puede crear evento");

test("Puede crear un evento correctamente", function(assert) {
  cargarDatosDePrueba();

  login();

  andThen(function() {
    esperar(3);
  });

  andThen(function() {
    click(".seccion-agenda");
  });

  andThen(function() {
    assert.equal(currentURL(), "/app/agenda/index/calendario");
  });

  andThen(function() {
    click("#crearEvento");
  });

  andThen(function() {
    fillIn("[name='titulo']", "Evento de prueba");
    click("[type='submit']");
  });

  andThen(function() {
    // Hay exactamente 5 errores de validación.
    assert.equal($(".field.error").length, 5);

    // Luego se cargan datos válidos
    fillIn("[placeholder='Seleccione hora']:first", "14:00");
    fillIn("[placeholder='Seleccione hora']:last", "16:00");

    fillIn("[name='cantidadDeParticipantes']", 0);

    selectSearch(".selectorDePerfil", "demo");
  });

  andThen(function() {
    selectChoose(".selectorDePerfil", "Nombre Apellido");
  });

  andThen(function() {
    selectSearch(".selectorDeEscuela", "60");
  });

  andThen(function() {
    selectChoose(
      ".selectorDeEscuela",
      "Escuela N° 10 - General José de San Martín"
    );
  });

  /* Con los datos cargados, tiene que permitir agendar */
  andThen(function() {
    clickSobreElTexto("Agendar");
  });

  /* Y el usuario debe quedar en la vista de agenda nuevamente */
  andThen(function() {
    assert.equal(currentURL(), "/app/agenda/index/calendario");
  });
});
