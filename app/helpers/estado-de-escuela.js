import Ember from 'ember';

export function estadoDeEscuela(params, namedArgs/*, hash*/) {
  let estado = params[0];
  let label = namedArgs.label;

  if (estado === true ) {
    estado = '<i class="ui green circle checkmark icon"></i>';
    if (label === "True") {
      estado = estado + 'Abierta';
    }
  } else if (estado === false){
    estado = '<i class="ui red remove ciercle outline icon"></i>';
    if (label === "True") {
      estado += 'Cerrada';
    }
  }
  return Ember.String.htmlSafe(estado);
}

export default Ember.Helper.helper(estadoDeEscuela);
