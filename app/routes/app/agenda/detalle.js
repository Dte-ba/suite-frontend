import Ember from 'ember';

export default Ember.Route.extend({
  breadCrumb: { title: "Detalle de acción" },

  afterModel(model) {
    model.set("filaDatosDeAccion", [
      {
        titulo: "Tarea vinculante",
        id: ""
      },
      {
        titulo: "Inicio",
        id: "fecha_inicio"
      },
      {
        titulo: "Fin",
        id: "fecha_fin"
      },
      {
        titulo: "Categoría",
        id: ""
      },
      {
        titulo: "Objetivo",
        id: "objetivo"
      },
      {
        titulo: "Acta",
        id: ""
      }
    ]);

    model.set("filaUsuarios", [
      {
        titulo: "Responsable",
        id: "responsable.nombreCompleto"
      },
      {
        titulo: "Acompañantes",
        componente: 'suite-detalle/participantes'
      },
      {
        titulo: "Participantes",
        id: "cantidadDeParticipantes"
      }
    ]);

    model.set("filaEscuela", [
      {
        titulo: "Región",
        id: "escuela.localidad.distrito.region.numero"
      },
      {
        titulo: "Dirección",
        id: "escuela.direccion"
      },
      {
        titulo: "Nombre",
        id: "escuela.nombre"
      },
      {
        titulo: "Distrito",
        id: "escuela.localidad.distrito.nombre"
      }
    ]);

    return model;
  }
});
