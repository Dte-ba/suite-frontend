import Ember from "ember";

export default Ember.Route.extend({
  breadCrumb: { title: "Detalle de validación" },

  afterModel(model) {
    model.set("filaDispositivos", [
      {
        titulo: "Cantidad pedidas",
        id: "cantidadPedidas"
      },
      {
        titulo: "Solicitada por",
        componente: "suite-detalle/autor"
      },
      {
        titulo: "Estado",
        componente: "suite-detalle/estado-de-validacion"
      }
    ]);

    model.set("filaEscuela", [
      {
        titulo: "Nombre",
        componente: "suite-detalle/escuela"
      },
      {
        titulo: "CUE",
        componente: "suite-detalle/cue"
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
        id: "escuela.modalidad.nombre"
      }
    ]);

    model.set("filaObservaciones", [
      {
        titulo: "Comentarios",
        id: "observaciones"
      }
    ]);

    return model;
  }
});
