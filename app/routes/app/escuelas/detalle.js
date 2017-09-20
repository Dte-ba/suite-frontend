import Ember from "ember";

export default Ember.Route.extend({
  breadCrumb: { title: "Detalle de escuela" },

  afterModel(model) {
    model.set("filaPiso", [
      {
        titulo: "Marca",
        id: "piso.servidor"
      },
      {
        titulo: "Serie",
        id: "piso.serie"
      },
      {
        titulo: "UPS",
        id: "piso.upsComoCadena"
      },
      {
        titulo: "Rack",
        id: "piso.rackComoCadena"
      },
      {
        titulo: "Estado",
        id: "piso.estadoComoCadena"
      },
      {
        titulo: "Llave",
        componente: "suite-detalle/llave-de-piso"
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
        titulo: "Financiamiento",
        id: "tipoDeFinanciamiento.nombre"
      },
      {
        titulo: "Gestión",
        id: "tipoDeGestion.nombre"
      },
      {
        titulo: "Modalidad",
        id: ""
      },
      {
        titulo: "Programas",
        componente: "suite-detalle/programas"
      },
      {
        titulo: "CUE anteriores",
        componente: "suite-detalle/cue-anteriores"
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
  },

  actions: {
    crearEventoParaEstaEscuela() {
      let model = this.modelFor("app.escuelas.detalle");
      return this.transitionTo("app.agenda.crear", {
        queryParams: { escuela_id: model.id }
      });
    },
    crearValidacionParaEstaEscuela() {
      let model = this.modelFor("app.escuelas.detalle");
      return this.transitionTo("app.validaciones.crear", {
        queryParams: { escuela_id: model.id }
      });
    }
  }
});
