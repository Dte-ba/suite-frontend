import Ember from "ember";

export function estadoDeValidacion(params, namedArgs /*, hash*/) {
  let estado = params[0];
  let label = namedArgs.label;

  if (estado === "Objetada") {
    estado = '<i class="ui red chat icon"></i>';
    if (label === "True") {
      estado = estado + "Objetada";
    }
  } else if (estado === "Pendiente") {
    estado = '<i class="ui yellow wait icon"></i>';
    if (label === "True") {
      estado = estado + "Pendiente";
    }
  } else if (estado === "Aprobada") {
    estado = '<i class="ui green check icon"></i>';
    if (label === "True") {
      estado = estado + "Aprobada";
    }
  }

  return Ember.String.htmlSafe(estado);
}

export default Ember.Helper.helper(estadoDeValidacion);
