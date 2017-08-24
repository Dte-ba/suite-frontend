import Ember from "ember";
import ENV from "../config/environment";

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  store: Ember.inject.service(),
  miPerfil: null /* Registro de ember-data con el usuario actual. */,
  data: {},

  nombreCompleto: Ember.computed("data.nombre", "data.apellido", function() {
    let nombre = this.get("data.nombre");
    let apellido = this.get("data.apellido");
    return `${nombre} ${apellido}`;
  }),

  // Se llamará desde la ruta principal app.
  cargar() {
    let url = ENV.API_URL + "/api/mi-perfil";
    return this.get("ajax").request(url).then(response => {
      this.set("data", response.data);

      return this.get("store")
        .findRecord("perfil", response.data.idPerfil)
        .then(r => {
          this.set("miPerfil", r);
        });
    });
  },

  /* Retorna true, false o undefined para el tipo de permiso solicitado */
  tienePermiso(permiso) {
    return this.get("data.permisos")[permiso];
  }
});
