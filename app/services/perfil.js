import Ember from "ember";
import ENV from "../config/environment";

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  data: {},

  // Se llamará desde la ruta principal app.
  cargar() {
    let url = ENV.API_URL + "/api/mi-perfil";
    return this.get("ajax").request(url).then(response => {
      this.set("data", response.data);
    });
  }
});
