import Ember from 'ember';

export function estadoDeTarea(params/*, hash*/) {
  let estado = params[0];
  if (estado === true ) {
    estado = '<i class="ui green server icon"></i>';
  } else if (estado === false){
    estado = '<i class="ui red server icon"></i>';
  } 
  return Ember.String.htmlSafe(estado);
}

export default Ember.Helper.helper(estadoDeTarea);
