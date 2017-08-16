import Ember from 'ember';

export function estadoDeTarea(params, namedArgs/*, hash*/) {
  let estado = params[0];
  let label = namedArgs.label;

  if (estado === true ) {
    estado = '<i class="ui green server icon"></i>';
    if (label === "True") {
      estado = estado + 'Piso funcionando';
    }
  } else if (estado === false){
    estado = '<i class="ui red server icon"></i>';
    if (label === "True") {
      estado += 'Piso sin funcionar';
    }
  }
  return Ember.String.htmlSafe(estado);
}

export default Ember.Helper.helper(estadoDeTarea);
