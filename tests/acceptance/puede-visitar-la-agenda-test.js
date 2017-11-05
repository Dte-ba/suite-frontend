import { test } from "qunit";
import moduleForAcceptance from "suite-frontend/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | puede visitar la agenda");

test("Puede vistar la agenda y cargar un evento", function(assert) {
  login();

  andThen(function() {
    esperar();
  });

  andThen(function() {
    click(".seccion-agenda");
  });

  andThen(function() {
    assert.equal(currentURL(), "/app/agenda/index/lista");
  });
});
