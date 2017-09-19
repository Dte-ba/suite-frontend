import Ember from "ember";

export default Ember.Route.extend({
  breadCrumb: { title: "Detalle de tarea" },

  afterModel(model) {
    model.set("filaCaracteristicas", [
      {
        titulo: "Autor",
        componente: "suite-detalle/autorDeLaTarea"
      },
      {
        titulo: "Responsable asignado",
        id: "responsable.nombreCompleto"
      },
      {
        titulo: "Descripcion",
        id: "descripcion"
      },
      {
        titulo: "Motivo",
        id: "motivoDeTarea.nombre"
      }
    ]);

    model.set("filaEscuela", [
      {
        titulo: "Nombre",
        id: "escuela.nombre"
      },
      {
        titulo: "CUE",
        id: "escuela.cue"
      },
      {
        titulo: "Región",
        id: "escuela.localidad.distrito.region.numero"
      },
      {
        titulo: "Distrito",
        id: "escuela.localidad.distrito.nombre"
      },
      {
        titulo: "Dirección",
        id: "escuela.direccion"
      },
      {
        titulo: "Nivel",
        id: "escuela.nivel.nombre"
      },
      {
        titulo: "Modalidad",
        id: ""
      }
    ]);

    return model;
  }
});
