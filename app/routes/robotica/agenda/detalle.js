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
        titulo: "Titulo",
        id: "titulo.nombre"
      },
      {
        titulo: "Área en que se dicta",
        id: "areaEnQueSeDicta.nombre"
      },
      {
        titulo: "Curso",
        id: "curso.nombre"
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
        titulo: "Tallerista",
        componente: "suite-detalle/tallerista"
      },
      {
        titulo: "Docente a cargo",
        id: "docente_a_cargo"
      },
      {
        titulo: "Cantidad de alumnos que participan",
        id: "cantidadDeAlumnos"
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

    return this.get("perfil")
      .puedeEditarElTaller(model.get("id"))
      .then(puedeEditar => {
        model.set("puedeEditar", puedeEditar);
        return model;
      });
  }
});
