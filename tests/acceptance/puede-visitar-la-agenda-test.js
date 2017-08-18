import { test } from 'qunit';
import Ember from "ember"
import moduleForAcceptance from 'suite-frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | puede visitar la agenda');

function esperar() {
  return Ember.Test.promise(function(resolve) {
    window.setTimeout(resolve, 2000);
  });
}

test('Puede vistar la agenda y cargar un evento', function(assert) {
  visit('/login');

  fillIn('#name', 'demo');
  fillIn('#password', 'demo');
  click('#ingresar');

  esperar();

  andThen(function () {
    click('.seccion-agenda');
  });

  andThen(function () {
    assert.equal(currentURL(), "/app/agenda");
  });


});
