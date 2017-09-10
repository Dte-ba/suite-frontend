import { test } from "qunit";
import moduleForAcceptance from "suite-frontend/tests/helpers/module-for-acceptance";

moduleForAcceptance(
  "Acceptance | al crear eventos valida correctamente las fechas"
);

function muestraElMensajeDeError(texto) {
  let mensajesEnPantalla = $(".ui.pointing.red.basic.label")
    .map((i, e) => $(e).text())
    .toArray();

  let encuentraElMensaje = mensajesEnPantalla.indexOf(texto) > -1;

  if (!encuentraElMensaje) {
    /*eslint no-console: ["error", { allow: ["warn", "error"] }] */
    console.error(
      "No se encuentra el mensaje",
      texto,
      "en",
      mensajesEnPantalla
    );
  }

  return encuentraElMensaje;
}

test("al-crear-eventos-valida-correctamente-las-fechas", function(assert) {
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

  /* Prueba: El usuario no puede ingresar un evento que comienza
     y termina a la misma hora (y el mismo día) */
  andThen(function() {
    fillIn("[name='titulo']", "Demo");
    fillIn("[placeholder='Seleccione fecha']:first", "1/10/2017");
    fillIn("[placeholder='Seleccione fecha']:last", "1/10/2017");

    fillIn("[placeholder='Seleccione hora']:first", "18:00");
    fillIn("[placeholder='Seleccione hora']:last", "18:00");

    click("[type='submit']");
  });

  andThen(function() {
    let mensajeEsperado = "El horario de inicio y fin no puede ser el mismo.";
    assert.ok(muestraElMensajeDeError(mensajeEsperado));

    fillIn("[placeholder='Seleccione hora']:last", "09:00");
    click("[type='submit']");
  });

  andThen(function() {
    let mensajeEsperado = "La hora de inicio no puede superar la hora de fin.";
    assert.ok(muestraElMensajeDeError(mensajeEsperado));

    fillIn("[placeholder='Seleccione fecha']:first", "12/10/2017");
    click("[type='submit']");
  });

  andThen(function() {
    let mensaje = "La fecha de inicio debe ser anterior a la fecha de fin.";
    assert.ok(muestraElMensajeDeError(mensaje));
  });
});
