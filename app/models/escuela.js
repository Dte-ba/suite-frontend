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
  tipoDeFinanciamiento: DS.belongsTo("tipoDeFinanciamiento"),
  tipoDeGestion: DS.belongsTo("tipoDeGestion"),
  nivel: DS.belongsTo("nivel"),
  area: DS.belongsTo("area"),
  programas: DS.hasMany("programa"),
  validaciones: DS.hasMany("validacion"),
  piso: DS.belongsTo("piso"),
  contactos: DS.hasMany("contacto"),
  eventos: DS.hasMany("evento"),
  padre: DS.belongsTo("escuela"),
  subescuelas: DS.hasMany("escuela", {inverse: 'padre'}),
  fechaConformacion: DS.attr("string"),
  motivoDeConformacion: DS.belongsTo("motivoDeConformacion"),
  estado: DS.attr("boolean"),
  conformada: DS.attr("boolean"),

  tieneDatosGeolocalizacion: Ember.computed("latitud", "longitud", function() {
    return this.get("latitud") && this.get("longitud");
  }),

  validacionesDeFormulario: {
    nombre: [validatePresence(true)],
    cue: [validatePresence(true)]
  },

  validacionesParaConformacion: {
    escuelaAConformar: [validatePresence(true)],
    motivo: [validatePresence(true)],
  }
});
