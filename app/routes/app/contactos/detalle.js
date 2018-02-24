import Ember from "ember";

export default Ember.Route.extend({
  requiere: "personas.listar",
  breadCrumb: { title: "Detalle de contacto" },

  afterModel(model) {
    model.set("filaDatosPersonales", [
      {
        titulo: "Escuela/s",
        id: "escuela.nombre"
      },
      {
        titulo: "Cargo",
        id: "cargo.nombre"
      },
      {
        titulo: "Teléfono Particular",
        id: "telefono_particular"
      },
      {
        titulo: "Teléfono Celular",
        id: "telefono_celular"
      },
      {
        titulo: "Email",
        id: "email"
      },
      {
        titulo: "Horario",
        id: "horario"
      }
    ]);

    return model;
  }
});
