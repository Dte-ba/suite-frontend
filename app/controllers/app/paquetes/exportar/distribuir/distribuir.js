import Ember from "ember";
import ENV from "suite-frontend/config/environment";

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),

  actions: {
    distribuirPaquetes(model) {
      let id = model.get("id");
      let url = `api/trabajos/distribuir_paquetes?id=${id}`;
      return this.get("ajax").request(`${ENV.API_URL}/${url}`);
    }
  }
});
