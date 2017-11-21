import Ember from "ember";

export default Ember.Route.extend({
  breadCrumb: { title: "Detalle de acción" },
  notificador: Ember.inject.service(),
  perfil: Ember.inject.service(),

  afterModel(model) {


    model.set("filaDatosDeAccion", [
      {
        titulo: "Inicio",
        fechaHora: true,
        id: "fecha_inicio"
      },
      {
        titulo: "Fin",
        fechaHora: true,
        id: "fecha_fin"
      },
      {
        titulo: "Categoría",
        id: "categoria.nombre"
      },
      {
        titulo: "Objetivo",
        id: "objetivo"
      },
      {
        titulo: "Minuta",
        id: "minuta"
      },
      {
        titulo: "Acta",
        componente: "suite-detalle/acta-de-evento"
      }
    ]);

    model.set("filaUsuarios", [
      {
        titulo: "Responsable",
        componente: "suite-detalle/responsable"
      },
      {
        titulo: "Acompañantes",
        componente: "suite-detalle/participantes"
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
        componente: "suite-detalle/escuela"
      },
      {
        titulo: "Distrito",
        id: "escuela.localidad.distrito.nombre"
      }
    ]);

    return this.get('perfil').puedeEditarLaAccion(model.get('id')).then(puedeEditar => {
      model.set('puedeEditar', puedeEditar);
      return model;
    })
  }
});
