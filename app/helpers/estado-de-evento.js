import Ember from "ember";

export function estadoDeEvento(params, namedArgs) {
  let estado = params[0];
  let label = namedArgs.label;

  if (estado === true) {
    estado = '<i class="ui blue check icon"></i>';
    if (label === "True") {
      estado = estado + "Evento finalizado";
    }
  } else if (estado === false) {
    estado = '<i class="ui orange time icon"></i>';
    if (label === "True") {
      estado += "Evento abierto";
    }
  }
  return Ember.String.htmlSafe(estado);
}

export default Ember.Helper.helper(estadoDeEvento);
