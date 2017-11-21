import Ember from "ember";
import ENV from "../config/environment";

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  store: Ember.inject.service(),
  miPerfil: null /* Registro de ember-data con el usuario actual. */,
  data: {},

  rol: Ember.computed("data.grupos.0.nombre", function() {
    return this.get("data.grupos.0.nombre");
  }),

  nombreCompleto: Ember.computed("data.nombre", "data.apellido", function() {
    let nombre = this.get("data.nombre");
    let apellido = this.get("data.apellido");
    return `${nombre} ${apellido}`;
  }),

  // Se llamará desde la ruta principal app.
  cargar() {
    let url = ENV.API_URL + "/api/mi-perfil";
    return this.get("ajax")
      .request(url)
      .then(response => {
        this.set("data", response.data);
        return this.get("store")
          .findRecord("perfil", response.data.idPerfil)
          .then(r => {
            this.set("miPerfil", r);
            return this.get("miPerfil.region");
          });
      });
  },

  /* Retorna true, false o undefined para el tipo de permiso solicitado */
  tienePermiso(permiso) {
    return this.get("data.permisos")[permiso];
  },

  tienePermisoGlobal: Ember.computed("data.permisos", function() {
    return this.get("data.permisos")["perfil.global"];
  }),

  obtenerRegion() {
    return this.get("miPerfil.region");
  },

  region: Ember.computed.alias("miPerfil.region.numero"),

  puedeEditarDentroDeLaRegion(numero_de_region) {
    if (this.tienePermiso("perfil.global")) {
      return true;
    } else {
      if (this.get("region") === numero_de_region) {
        return true;
      }
    }

    return false;
  },

  esCoordinador: Ember.computed("rol", function() {
    return this.get("rol") === "Coordinador";
  }),

  puedeEditarLaAccion(accion_id) {
    let perfil_id = this.get('miPerfil.id');
    let url = `${ENV.API_URL}/api/perfiles/${perfil_id}/puede-editar-la-accion?accion_id=${accion_id}`;

    return this.get("ajax")
      .request(url)
      .then(response => {
        return response.data.puedeEditar;
      });
  }
});
