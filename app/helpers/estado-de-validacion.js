import Ember from "ember";

export function estadoDeValidacion(params /*, hash*/) {
  let estado = params[0];

  if (estado === "Objetada") {
    estado = '<i class="ui red chat icon"></i>';
  } else if (estado === "Pendiente") {
    estado = '<i class="ui yellow wait icon"></i>';
  } else if (estado === "Aprobada") {
    estado = '<i class="ui green check icon"></i>';
  }

  return Ember.String.htmlSafe(estado);
}

export default Ember.Helper.helper(estadoDeValidacion);
