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

  // Se llamará desde la ruta principal app (archivo "app/routes/app.js")
  cargar(perfilInspeccionado) {
    let url = ENV.API_URL + "/api/mi-perfil";

    if (perfilInspeccionado) {
      url = `${ENV.API_URL}/api/mi-perfil?perfilInspeccionado=${perfilInspeccionado}`;
    }

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

  image: Ember.computed.alias("miPerfil.image"),

  /* Retorna true, false o undefined para el tipo de permiso solicitado */
  tienePermiso(permiso) {
    if (this.get("data.permisos")) {
      return this.get("data.permisos")[permiso];
    } else {
      return false;
    }
  },

  tienePermisoGlobal: Ember.computed("data.permisos", function() {
    return this.get("data.permisos")["perfil.global"];
  }),

  version: Ember.computed("data.version", function() {
    return this.get("data.version");
  }),

  tieneAccesoASuite: Ember.computed("data.tieneAccesoASuite", function() {
    return this.get("data.tieneAccesoASuite");
  }),

  tieneAccesoARobotica: Ember.computed("data.tieneAccesoARobotica", function() {
    return this.get("data.tieneAccesoARobotica");
  }),

  tieneAccesoAAmbosSistemas: Ember.computed.and("tieneAccesoASuite", "tieneAccesoARobotica"),

  tieneAccesoAlModo(modo) {
    if (modo === "robotica") {
      return this.get("tieneAccesoARobotica");
    }

    if (modo == "suite") {
      return this.get("tieneAccesoASuite");
    }

    throw new Error(`Modo no esperado: ${modo}`);
  },

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
    let perfil_id = this.get("miPerfil.id");
    let url = `${ENV.API_URL}/api/perfiles/${perfil_id}/puede-editar-la-accion?accion_id=${accion_id}`;

    return this.get("ajax")
      .request(url)
      .then(response => {
        return response.data.puedeEditar;
      });
  },

  puedeEditarElTaller(taller_id) {
    let perfil_id = this.get("miPerfil.id");
    let url = `${ENV.API_URL}/api/perfiles/${perfil_id}/puede-editar-el-taller?taller_id=${taller_id}`;

    return this.get("ajax")
      .request(url)
      .then(response => {
        return response.data.puedeEditar;
      });
  }
});
