import { test } from "qunit";
import Ember from "ember";
import moduleForAcceptance from "suite-frontend/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | puede ingresar apruebas ui");

function esperar() {
  return new Ember.RSVP.Promise(success => {
    Ember.run.later(success, 1000);
  });
}

function clickSobreElTexto(texto) {
  let boton = $(`button:contains("${texto}")`);
  let ahref = $(`a:contains("${texto}")`);

  boton.click();
  ahref.click();
}

test("visiting /app/ui", function(assert) {
  visit("/login");

  andThen(function() {
    assert.equal(currentURL(), "/login");
    clickSobreElTexto("Ingresar como dte");
    esperar();
  });

  andThen(function() {
    visit("/app/ui");
  });

  andThen(function() {
    assert.equal(currentURL(), "/app/ui");
    assert.equal(
      $(".main h1").text(),
      "Galería UI",
      "Aparece el título de la sección de pruebas."
    );
    esperar();
  });

  andThen(function() {
    clickSobreElTexto("Tablas");
    esperar();
  });

  andThen(function() {
    assert.equal($(".pagination a.active").text(), "1");
    clickSobreElTexto("3");
    esperar();
  });

  andThen(function() {
    assert.equal(
      $(".pagination a.active").text(),
      "3",
      "Logra visitar la página 3 de la tabla"
    );
    clickSobreElTexto("1");
    esperar();
  });

  andThen(function() {
    assert.equal(
      $(".pagination a.active").text(),
      "1",
      "Logra visitar la página 1 de la tabla"
    );
    clickSobreElTexto("Modales");
    esperar();
  });

  andThen(function() {
    assert.equal(
      currentURL(),
      "/app/ui/modales",
      "Cambió correctamente a la ruta de los modales."
    );
    esperar();
  });
});
