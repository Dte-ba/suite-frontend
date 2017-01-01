import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('suite-tabla', 'Integration | Component | suite tabla', {
  integration: true
});

test('it renders', function(assert) {

  this.set('rows', [
    {nombre: 'Pepe', id: 20},
    {nombre: 'Toto', id: 30},
  ]);

  this.set('cols', [
    {
      "propertyName": "id",
      "title": "Identificador"
    },

    {
      "propertyName": "nombre",
      "title": "Nombre Completo"
    },
  ]);

  this.render(hbs`{{suite-tabla columnas=cols filas=rows}}`);
  let texto = this.$().text().trim();
  //console.log(texto);

  assert.ok(texto.indexOf("Mostrando") > -1);
  assert.ok(texto.indexOf("Pepe") > -1);
  assert.ok(texto.indexOf("Toto") > -1);
  assert.ok(texto.indexOf("1 hasta 2") > -1);
});
