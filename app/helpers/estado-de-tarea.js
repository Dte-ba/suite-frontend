import Ember from 'ember';

export function estadoDeTarea(params/*, hash*/) {
  let estado = params[0];
  if (estado === "Cerrado" ) {
    estado = '<i class="ui green checkmark icon"></i>' + estado;
  } else if (estado === "En Espera") {
    estado = '<i class="ui yellow wait empty icon"></i>' + estado;
  } else if (estado === "En Progreso") {
    estado = '<i class="ui yellow hourglass half icon"></i>' + estado;
  } else if (estado === "Abierto") {
    estado = '<i class="ui red hourglass empty down icon"></i>' + estado;
  }
  return Ember.String.htmlSafe(estado);
}

export default Ember.Helper.helper(estadoDeTarea);
