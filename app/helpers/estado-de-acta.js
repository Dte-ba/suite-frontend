import Ember from "ember";

export function estadoDeActa(params, namedArgs /*, hash*/) {
  let acta = params[0];
  let label = namedArgs.label;

  if (acta) {
    acta = '<i class="green file icon"></i>';
    if (label === "True") {
      acta = acta + "Con acta";
    }
  } else {
    acta = '<i class="yellow file icon"></i>';
    if (label === "True") {
      acta += "Sin acta";
    }
  }
  return Ember.String.htmlSafe(acta);
}

export default Ember.Helper.helper(estadoDeActa);
