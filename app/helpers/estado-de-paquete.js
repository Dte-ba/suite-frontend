import Ember from "ember";

export function estadoDePaquete(params /*, hash*/) {
  let estado = params[0];

  if (estado === "Objetado") {
    estado = '<i class="ui red chat icon"></i>';
  } else if (estado === "Pendiente") {
    estado = '<i class="ui yellow wait icon"></i>';
  } else if (estado === "EducAr") {
    estado = '<i class="ui yellow wait icon"></i>';
  } else if (estado === "Devuelto") {
    estado = '<i class="ui green check icon"></i>';
  }
  return Ember.String.htmlSafe(estado);
}

export default Ember.Helper.helper(estadoDePaquete);
