import DS from "ember-data";
import Ember from "ember";
import {
  validatePresence,
  validateNumber
} from "ember-changeset-validations/validators";

function validarHorarios() {
  return (key, newValue, oldValue, changes, content) => {
    let { inicio, fin } = changes;
    let model = content.get("_internalModel").record;

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

    return true;
  };
}
function validateCerrarEvento() {
  return (key, newValue, oldValue, changes, content) => {
    let { acta, cerrarEvento } = changes;
    let model = content.get("_internalModel").record;

    if (key === "acta") {
      acta = newValue;
    } else {
      if (!acta) {
        acta = model.get("acta");
      }
    }

    if (key === "cerrarEvento") {
      cerrarEvento = newValue;
    } else {
      if (!cerrarEvento) {
        cerrarEvento = model.get("cerrarEvento");
      }
    }

    if (cerrarEvento === true) {
      if (!acta) {
        return "No se puede cerrar un evento sin acta.";
      }
    }

    return true;
  };
}

export default DS.Model.extend({
  fechaFormateada: DS.attr("string"), // solo lectura, se usa en la lista de eventos.
  fecha: DS.attr("string"),
  inicio: DS.attr("string"),
  fin: DS.attr("string"),
  minuta: DS.attr("string"),
  titulo: DS.belongsTo("taller-de-robotica"),
  areaEnQueSeDicta: DS.belongsTo("area-de-robotica"),
  curso: DS.belongsTo("curso-de-robotica"),
  seccion: DS.belongsTo("seccion-de-robotica"),
  cantidadDeAlumnos: DS.attr("string"),
  docente_a_cargo: DS.attr("string"),

  acta: DS.attr(),
  cerrarEvento: DS.attr("boolean"),

  tallerista: DS.belongsTo("perfil"),
  escuela: DS.belongsTo("escuela"),
  resumenParaCalendario: DS.attr("string"),
  fechaDeCreacion: DS.attr("string"),
  fechaDeUltimaModificacion: DS.attr("string"),

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
    areaEnQueSeDicta: [validatePresence(true)],
    fecha: [validatePresence(true)],
    inicio: [validatePresence(true), validarHorarios()],
    fin: [validatePresence(true)],
    curso: [validatePresence(true)],
    seccion: [validatePresence(true)],
    tallerista: [validatePresence(true)],
    docente_a_cargo: [validatePresence(true)],
    escuela: [validatePresence(true)],
    cerrarEvento: [validateCerrarEvento()],
    // minuta: [validatePresence(true)],
    cantidadDeAlumnos: [
      validateNumber({
        positive: true,
        integer: true,
        gte: 1,
        lte: 40,
        message: "Tiene que ser un número mayor a 1 y menor a 40."
      }),
      validatePresence(true)
    ]
  }
});
