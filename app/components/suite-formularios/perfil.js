import Ember from "ember";
import ENV from "suite-frontend/config/environment";
import { task, timeout } from "ember-concurrency";

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  error: "",

  tareaGuardar: task(function*(model) {
    try {
      yield timeout(2000);
      if (model.get("id")) {
        yield model.save();
      } else {
        let url = `${ENV.API_URL}/api/users/create_user`;
        /* var resultado = */ yield this.get("ajax").request(url, {
          method: "POST",
          data: {
            username: model.get("emailLaboral"),
            password: "temporal"
          }
        });
      }

      if (this.get("cuandoGuarda")) {
        this.get("cuandoGuarda")();
      }
    } catch (e) {
      this.set("error", e);
      throw new Error(e);
    }
  }).drop()
});
