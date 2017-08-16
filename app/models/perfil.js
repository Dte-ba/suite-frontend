import DS from "ember-data";
import Ember from "ember";

export default DS.Model.extend({
  // 1) Datos Personales
  image: DS.attr("string"),
  nombre: DS.attr("string"),
  apellido: DS.attr("string"),
  fechadenacimiento: DS.attr("string"),
  titulo: DS.attr("string"),
  experiencia: DS.belongsTo("experiencia"),
  dni: DS.attr("string"),
  cuit: DS.attr("string"),
  cbu: DS.attr("string"),
  email: DS.attr("string"),
  direccionCalle: DS.attr("string"),
  direccionAltura: DS.attr("string"),
  direccionPiso: DS.attr("string"),
  direccionDepto: DS.attr("string"),
  direccionTorre: DS.attr("string"),
  codigoPostal: DS.attr("string"),
  localidad: DS.belongsTo("localidad"),
  telefonoCelular: DS.attr("string"),
  telefonoAlternativo: DS.attr("string"),
  estado: DS.attr("boolean"),
  estadoComoCadena: Ember.computed("estado", function() {
    let estado = this.get("estado");
    if (estado === true) {
      estado = "Activo";
    } else {
      estado = "Bloqueado";
    }
    return estado;
  }),

  // 2) Datos administrativos
  region: DS.belongsTo("region"),
  cargo: DS.belongsTo("cargo"),
  contrato: DS.belongsTo("contrato"),
  expediente: DS.attr("string"),
  fechaDeIngreso: DS.attr("string"),
  fechaDeRenuncia: DS.attr("string"),
  emailLaboral: DS.attr("string"),

  eventos: DS.hasMany("evento", {
    inverse: 'acompaniantes'
  }),

  regionComoCadena: Ember.computed("region.{numero}", function() {
    return this.get("region.numero");
  }),

  cargoComoCadena: Ember.computed("cargo.{nombre}", function() {
    return this.get("cargo.nombre");
  }),

  experienciaComoCadena: Ember.computed("experiencia.{nombre}", function() {
    return this.get("experiencia.nombre");
  }),

  contratoComoCadena: Ember.computed("contrato.{nombre}", function() {
    return this.get("contrato.nombre");
  }),

  nombreCompleto: Ember.computed("nombre", "apellido", function() {
    let apellido = this.get("apellido");
    let nombre = this.get("nombre");

    return `${apellido}, ${nombre}`;
  }),

  nombreApellido: Ember.computed("nombre", "apellido", function() {
    let apellido = this.get("apellido");
    let nombre = this.get("nombre");

    return `${nombre} ${apellido}`;
  }),

  direccionCompleta: Ember.computed(
    "direccionCalle",
    "direccionAltura",
    "direccionPiso",
    "direccionDepto",
    "direccionTorre",
    "localidad.{nombre}",
    "codigoPostal",
    function() {
      let direccionCalle = this.get("direccionCalle") || "";
      let direccionAltura = this.get("direccionAltura") || "";
      let direccionPiso = this.get("direccionPiso") || "";
      let direccionDepto = this.get("direccionDepto") || "";
      let direccionTorre = this.get("direccionTorre") || "";

      if (direccionTorre === "") {
        direccionTorre = "";
      } else {
        direccionTorre = "- Torre ${direccionTorre}";
      }

      let localidad = this.get("localidad.nombre");

      let codigoPostal = this.get("codigoPostal");

      return `${direccionCalle} ${direccionAltura} - Piso ${direccionPiso} - Dpto ${direccionDepto} ${direccionTorre} - ${localidad} - ${codigoPostal}`;
    }
  )
});
