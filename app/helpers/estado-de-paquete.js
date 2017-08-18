import Ember from 'ember';

export function estadoDePaquete(params, namedArgs/*, hash*/) {
  let estado = params[0];
  let label = namedArgs.label;

  if (estado === "Objetado" ) {
    estado = '<i class="ui red chat icon"></i>';
    if (label === "True") {
      estado = estado + 'Objetado';
    }
  } else if (estado === "Pendiente"){
    estado = '<i class="ui yellow wait icon"></i>';
    if (label === "True") {
      estado += 'Pendiente';
    }
  } else if (estado === "EducAr"){
    estado = '<i class="ui yellow wait icon"></i>';
    if (label === "True") {
      estado += 'EducAr';
    }
  } else if (estado === "Devuelto"){
    estado = '<i class="ui blue file icon"></i>';
    if (label === "True") {
      estado += 'Devuelto';
    }
  }
  return Ember.String.htmlSafe(estado);
}

export default Ember.Helper.helper(estadoDePaquete);
