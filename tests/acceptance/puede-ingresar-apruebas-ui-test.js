import { test } from "qunit";
import moduleForAcceptance from "suite-frontend/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | puede ingresar apruebas ui");

test("visiting /", function(assert) {
  visit("/");

  andThen(function() {
    assert.equal(currentURL(), "/login", "Ingreso correctamente");
    login();
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
