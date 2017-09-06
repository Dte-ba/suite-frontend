import Ember from "ember";
let n = "clickSobreElTexto";

export default Ember.Test.registerAsyncHelper(n, function(app, texto) {
  let ahref = $(`a:contains("${texto}")`);
  let boton = $(`button:contains("${texto}")`);

  if (ahref) {
    ahref.click();
  } else {
    boton.click();
  }
});
