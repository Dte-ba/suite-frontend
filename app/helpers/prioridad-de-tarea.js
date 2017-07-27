import Ember from 'ember';

export function prioridadDeTarea(params/*, hash*/) {
  let prioridad = params[0];
  if (prioridad === "Alta" ) {
    prioridad = '<i class="ui long arrow up icon"></i>' + prioridad;
  } else if (prioridad === "Media") {
    prioridad = '<i class="ui long arrow right icon"></i>' + prioridad;
  } else if (prioridad === "Baja") {
    prioridad = '<i class="ui long arrow down icon"></i>' + prioridad;
  }
  return Ember.String.htmlSafe(prioridad);
}

export default Ember.Helper.helper(prioridadDeTarea);
