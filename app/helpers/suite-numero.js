import Ember from "ember";

export function numero(params /*, hash*/) {
  let numero = params[0];
  if (!numero) {
    numero = 0;
  }

  return numero.toLocaleString("es");
}

export default Ember.Helper.helper(numero);
