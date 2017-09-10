import Ember from "ember";
let n = "clickSobreElTexto";

export default Ember.Test.registerAsyncHelper(n, function(app, texto) {
  let ahref = $(`a:contains("${texto}")`);
  let boton = $(`button:contains("${texto}")`);

  if (ahref.length) {
    return ahref.click();
  }

  if (boton.length) {
    return boton.click();
  }

  throw new Error(
    `Falló clickSobreElTexto, no existe un elemento con el texto "${texto}"`
  );
});
