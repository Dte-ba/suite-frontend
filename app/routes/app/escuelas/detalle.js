import Ember from "ember";

export default Ember.Route.extend({
  breadCrumb: { title: "Detalle de escuela" },

  afterModel(model) {
    model.set("filaPiso", [
      {
        titulo: "Marca",
        id: ""
      },
      {
        titulo: "Serie",
        id: ""
      },
      {
        titulo: "UPS",
        id: ""
      },
      {
        titulo: "Rack",
        id: ""
      },
      {
        titulo: "Estado",
        id: ""
      }
    ]);

    model.set("filaInformacion", [
      {
        titulo: "CUE",
        id: "cue"
      },
      {
        titulo: "Nro. Provincial",
        id: ""
      },
      {
        titulo: "Nivel",
        id: "nivel.nombre"
      },
      {
        titulo: "Modalidad",
        id: ""
      },
      {
        titulo: "Programas",
        id: "programasComoCadena"
      },
      {
        titulo: "CUE anteriores",
        id: ""
      },
      {
        titulo: "Anexo",
        id: ""
      }
    ]);

    model.set("filaDatosDeContacto", [
      {
        titulo: "Teléfono",
        id: "telefono"
      },
      {
        titulo: "Email",
        id: "email"
      },
      {
        titulo: "Dirección",
        id: "direccion"
      },
      {
        titulo: "Localidad",
        id: "localidad.nombre"
      },
      {
        titulo: "Distrito",
        id: "localidad.distrito.nombre"
      },
      {
        titulo: "Región",
        id: "localidad.distrito.region.numero"
      }
    ]);

    return model;
  }
});
