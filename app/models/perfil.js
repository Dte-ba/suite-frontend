import DS from "ember-data";
import Ember from "ember";

export default DS.Model.extend({
  // 1) Datos Personales
  image: DS.attr("string"),
  nombre: DS.attr("string"),
  apellido: DS.attr("string"),
  fechadenacimiento: DS.attr("string"),
  titulo: DS.attr("string"),
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

  // 2) Datos administrativos
  region: DS.belongsTo("region"),
  cargo: DS.attr("string"),
  contrato: DS.attr("string"),
  expediente: DS.attr("string"),
  fechaDeIngreso: DS.attr("string"),
  fechaDeRenuncia: DS.attr("string"),
  emailLaboral: DS.attr("string"),

  regionComoCadena: Ember.computed("region.{numero}", function() {
    return this.get("region.numero");
  }),

  nombreCompleto: Ember.computed("nombre", "apellido", function() {
    let apellido = this.get("apellido");
    let nombre = this.get("nombre");

    return `${apellido}, ${nombre}`;
  }),

  direccionCompleta: Ember.computed("direccionCalle", "direccionAltura", "direccionPiso", "direccionDepto", "direccionTorre", "localidad.{nombre}", "codigoPostal", function() {
    let direccionCalle = this.get("direccionCalle");
    let direccionAltura = this.get("direccionAltura");
    let direccionPiso = this.get("direccionPiso");
    let direccionDepto = this.get("direccionDepto");
    let direccionTorre = this.get("direccionTorre");
    if (direccionTorre === "") {
      direccionTorre = "";
    } else {
      direccionTorre = "- Torre ${direccionTorre}";
    }

    let localidad = this.get("localidad.nombre");

    let codigoPostal = this.get("codigoPostal");

    return `${direccionCalle} ${direccionAltura} - Piso ${direccionPiso} - Dpto ${direccionDepto} ${direccionTorre} - ${localidad} - ${codigoPostal}`;
  })
});
