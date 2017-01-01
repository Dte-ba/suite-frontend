import { test } from 'qunit';
import Ember from 'ember';
import moduleForAcceptance from 'suite-frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | puede ingresar apruebas ui');

function esperar() {
  return new Ember.RSVP.Promise((success) => {
    Ember.run.later(success, 1000);
  });
}

function clickSobreElTexto(texto) {
  $(`a:contains("${texto}")`).click();
}

test('visiting /ui', function(assert) {
  visit('/ui');

  andThen(function() {
    assert.equal(currentURL(), '/ui');
    esperar();
  });

  andThen(function() {
    clickSobreElTexto("Tablas");
    esperar();
  });

  andThen(function() {
    clickSobreElTexto("2");
    esperar();
  });

  andThen(function() {
    clickSobreElTexto("3");
    esperar();
  });

  andThen(function() {
    clickSobreElTexto("1");
    esperar();
  });

  andThen(function() {
    clickSobreElTexto("Modal");
    esperar();
  });

});
