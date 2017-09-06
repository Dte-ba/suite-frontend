import { test } from "qunit";
import moduleForAcceptance from "suite-frontend/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | puede ingresar mediante helper");

test("visiting /puede-ingresar-mediante-helper", function(assert) {
  visit("/");
  esperar(3);

  andThen(function() {
    assert.equal(currentURL(), "/login");
  });
});
