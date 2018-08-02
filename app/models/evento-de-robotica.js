import DS from "ember-data";
import Ember from "ember";
import {
  validatePresence,
  validateNumber
} from "ember-changeset-validations/validators";

/* Valida de las fechas y horas de un evento sean correctas.
   Para que una fecha sea correcta tiene que suceder esto:

      - caso 1: si fecha y fecha son del mismo dia, la hora no puede ser la misma.
      - caso 2: si fecha y fecha son del mismo dia, la hora de inicio no puede ser
                superior a la hora de finalización
      - caso 3: si las fechas son diferentes, la fecha de inicio tiene que ser
                siempre anterior a la fecha de finalización.
*/
function validateFechas() {
  return (key, newValue, oldValue, changes, content) => {
    let { fecha, fechaFin, inicio, fin } = changes;
    let model = content.get("_internalModel").record;

    if (key === "fecha") {
      fecha = newValue;
    } else {
      if (!fecha) {
        fecha = model.get("fecha");
      }
    }

    if (key === "fechaFin") {
      fechaFin = newValue;
    } else {
      if (!fechaFin) {
        fechaFin = model.get("fechaFin");
      }
    }

    if (key === "inicio") {
      inicio = newValue;
    } else {
      if (!inicio) {
        inicio = model.get("inicio");
      }
    }

    if (key === "fin") {
      fin = newValue;
    } else {
      if (!fin) {
        fin = model.get("fin");
      }
    }

    if (fecha === fechaFin) {
      if (inicio && fin) {
        /* Caso 1: No pueden tener la misma hora. */
        if (inicio === fin) {
          return "El horario de inicio y fin no puede ser el mismo.";
        }

        /* Caso 2: La hora de fin debe ser mayor a la hora de inicio. */
        if (inicio > fin) {
          return "La hora de inicio no puede superar la hora de fin.";
        }
      }
    } else {
      /* Caso 3: la fecha de inicio tiene que ser anterior a la fecha de fin. */
      if (fecha > fechaFin) {
        return "La fecha de inicio debe ser anterior a la fecha de fin.";
      }
    }

    return true;
  };
}

export default DS.Model.extend({
  fecha: DS.attr("string"),
  fechaFin: DS.attr("string"),
  inicio: DS.attr("string"),
  fin: DS.attr("string"),
  minuta: DS.attr("string"),
  titulo: DS.belongsTo("taller-de-robotica"),
  areaEnQueSeDicta: DS.belongsTo("area-de-robotica"),
  curso: DS.belongsTo("curso-de-robotica"),
  cantidadDeAlumnos: DS.attr("string"),
  docenteACargo: DS.attr("string"),

  acta: DS.attr(),

  tallerista: DS.belongsTo("perfil"),
  escuela: DS.belongsTo("escuela"),
  resumenParaCalendario: DS.attr("string"),

  fecha_inicio: Ember.computed("fecha", "inicio", function() {
    let fecha = this.get("fecha");
    let hora = this.get("inicio");

    return `${fecha}T${hora}`;
  }),

  fecha_fin: Ember.computed("fechaFin", "fin", function() {
    let fecha_fin = this.get("fechaFin");
    let hora = this.get("fin");

    return `${fecha_fin}T${hora}`;
  }),

  color: Ember.computed("titulo", function() {
    return "white";
  }),

  borderColor: Ember.computed("titulo", function() {
    return "#ccc";
  }),

  validaciones: {
    titulo: [validatePresence(true)],
    fecha: [validatePresence(true), validateFechas()],
    fechaFin: [validatePresence(true)],
    inicio: [validatePresence(true), validateFechas()],
    fin: [validatePresence(true)],
    curso: [validatePresence(true)],
    tallerista: [validatePresence(true)],
    escuela: [validatePresence(true)],
    // minuta: [validatePresence(true)],
    cantidadDeAlumnos: [
      validateNumber({
        positive: true,
        integer: true,
        message: "Tiene que ser un número"
      })
    ]
  }
});
