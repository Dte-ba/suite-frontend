import DS from "ember-data";
import Ember from "ember";
import { validatePresence } from "ember-changeset-validations/validators";

export default DS.Model.extend({
  cue: DS.attr("number"),
  nombre: DS.attr("string"),
  direccion: DS.attr("string"),
  telefono: DS.attr("string"),
  email: DS.attr("string"),
  latitud: DS.attr("number"),
  longitud: DS.attr("number"),
  localidad: DS.belongsTo("localidad"),
  tipoDeFinanciamiento: DS.hasMany("tipoDeFinanciamiento"),
  tipoDeGestion: DS.belongsTo("tipoDeGestion"),
  nivel: DS.belongsTo("nivel"),
  modalidad: DS.belongsTo("modalidad"),
  area: DS.belongsTo("area"),
  programas: DS.hasMany("programa"),
  validaciones: DS.hasMany("validacion"),
  piso: DS.belongsTo("piso"),
  contactos: DS.hasMany("contacto"),
  eventos: DS.hasMany("evento"),
  padre: DS.belongsTo("escuela", { inverse: "subescuelas" }),
  subescuelas: DS.hasMany("escuela", { inverse: "padre" }),
  fechaConformacion: DS.attr("string"),
  motivoDeConformacion: DS.belongsTo("motivoDeConformacion"),
  estado: DS.attr("boolean"),
  conformada: DS.attr("boolean"),

  numero_de_region: DS.attr("number"),

  observaciones: DS.attr("string"),

  fechaDeUltimaModificacion: DS.attr("string"),
  perfilDeUltimaModificacion: DS.belongsTo("perfil"),

  tieneDatosGeolocalizacion: Ember.computed("latitud", "longitud", function() {
    return this.get("latitud") && this.get("longitud");
  }),

  estadoDeEscuela: Ember.computed(
    "estado",
    "conformada",
    "subescuelas",
    "padre",
    function() {
      var estadoDeEscuela = {};
      let estado = this.get("estado");
      estadoDeEscuela.estado = estado;

      let absorbida = this.get("conformada");
      estadoDeEscuela.absorbida = absorbida;
      if (absorbida === true) {
        let padre = this.get("padre");
        estadoDeEscuela.padre = padre;
      }

      let subescuelas = this.get("subescuelas");
      if (subescuelas.content.length === 0) {
        estadoDeEscuela.conformada = false;
      } else {
        estadoDeEscuela.conformada = true;
      }
      return estadoDeEscuela;
    }
  ),
  direccionGoogleMaps: Ember.computed(
    "direccion",
    "localidad.{nombre}",
    "localidad.{distrito}.{nombre}",
    function() {
      var direccion = this.get("direccion");
      if (direccion) {
        direccion = direccion.replace(/,/g, "");
      }

      var localidad = this.get("localidad.nombre");
      var distrito = this.get("localidad.distrito.nombre");
      return direccion + ", " + distrito + ", " + localidad + ", Buenos Aires";
    }
  ),

  validacionesDeFormulario: {
    nombre: [validatePresence(true)],
    // cue: [validatePresence(true)],
    nivel: [validatePresence(true)],
    //modalidad: [validatePresence(true)],
    tipoDeFinanciamiento: [validatePresence(true)],
    tipoDeGestion: [validatePresence(true)],
    area: [validatePresence(true)],
    localidad: [validatePresence(true)]
  },

  validacionesParaConformacion: {
    escuelaAConformar: [validatePresence(true)],
    motivo: [validatePresence(true)]
  }
});
