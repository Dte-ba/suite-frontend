import Ember from "ember";
import ENV from "suite-frontend/config/environment";
import { timeout, task } from "ember-concurrency";

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  error: "",

  tareaGenerarConformacion: task(function*(model) {
    let id = model.get("id");
    let url = `${ENV.API_URL}/api/escuelas/${id}/conformar`;

    try {
      yield timeout(2000);
      yield this.get("ajax").request(url, {
        method: "POST",
        data: {
          escuela_que_se_absorbera: model.get("escuelaAConformar.id"),
          motivo_id: model.get("motivo.id")
        }
      });

      this.sendAction('luegoDeGuardar', model);

    } catch (e) {
      this.set("error", e);
    }
  })
});
