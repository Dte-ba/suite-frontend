import Ember from "ember";
import { task, timeout } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  obtenerPermisos: task(function*(group_id) {
    let url = ENV.API_URL + `/api/mi-perfil/${group_id}/detalle`;
    yield timeout(1000);
    let resultado = yield this.get("ajax").request(url);
    return resultado.data.permisosAgrupados;
  }).drop(),

  afterModel(model) {
    let group_id = model.get("id");
    let tarea = this.get("obtenerPermisos");

    model.set("tareaPermisos", tarea.perform(group_id));
    return model;
  }
});
