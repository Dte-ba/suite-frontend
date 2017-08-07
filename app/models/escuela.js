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
  piso: DS.belongsTo("piso"),
  contactos: DS.hasMany("contacto"),
  eventos: DS.hasMany("evento"),
  parent_id: DS.belongsTo("escuela"),
  fechaConformacion: DS.attr("string"),
  motivoDeConformacion: DS.belongsTo("motivoDeConformacion"),

  programasComoCadena: Ember.computed("programas", function() {
    return this.get("programas").map(e => e.get("nombre")).join(", ");
  }),

  tieneDatosGeolocalizacion: Ember.computed("latitud", "longitud", function() {
    return this.get("latitud") && this.get("longitud");
  }),

  validaciones: {
    nombre: [validatePresence(true)],
    cue: [validatePresence(true)]
  }
});
