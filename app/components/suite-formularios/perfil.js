import Ember from "ember";
import ENV from "suite-frontend/config/environment";
import { task, timeout } from "ember-concurrency";

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  store: Ember.inject.service(),
  error: "",
  idPerfil: null,

  tareaGuardar: task(function*(model) {
    try {
      yield timeout(2000);

      if (model.get("id")) {
        yield model.save();
      } else {
        // Si es la primera vez que pulsa "Save" en un perfil nuevo (sin id),
        // se asume que tiene que crear antes el usuario.
        if (!this.get("idPerfil")) {
          let url = `${ENV.API_URL}/api/users/create_user`;

          var resultado = yield this.get("ajax").request(url, {
            method: "POST",
            data: {
              username: model.get("emailLaboral"),
              password: "temporal"
            }
          });

          this.set("idPerfil", resultado.data.idPerfil);
        }

        // Se obtiene el perfil recién generado desde django.
        var perfil = yield this.get("store").findRecord(
          "perfil",
          this.get("idPerfil")
        );

        // Se cargan los atributos del formulario sobre el registro asociado al backend.
        // (model es un objeto ember-changeset, por eso se pueden obtener las propiedades con 'cast()')
        perfil.setProperties(model.cast());

        yield perfil.save();
      }

      if (this.get("cuandoGuarda")) {
        this.get("cuandoGuarda")();
      }

      this.set("error", "");
    } catch (e) {
      this.set("error", e);
      throw new Error(e);
    }
  }).drop()
});
