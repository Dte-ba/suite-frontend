import Ember from "ember";

export default Ember.Route.extend({
  breadCrumb: { title: "Detalle de usuario" },

  afterModel(model) {
    model.set("filaDatosAdministrativos", [
      {
        titulo: "Rol en la SUITE",
        id: ""
      },
      {
        titulo: "Región",
        id: "regionComoCadena"
      },
      {
        titulo: "Cargo",
        id: "cargo"
      },
      {
        titulo: "Contrato",
        id: "contrato"
      },
      {
        titulo: "Expediente",
        id: "expediente"
      },
      {
        titulo: "Fecha de ingreso",
        id: "fechaDeIngreso"
      },
      {
        titulo: "Email Laboral",
        id: "emailLaboral"
      }
    ]);

    model.set("filaDatosPersonales", [
      {
        titulo: "Nombre",
        id: "nombre"
      },
      {
        titulo: "Apellido",
        id: "apellido"
      },
      {
        titulo: "Fecha de nacimiento",
        id: "fechadenacimiento"
      },
      {
        titulo: "Título",
        id: "titulo"
      },
      {
        titulo: "DNI",
        id: "dni"
      },
      {
        titulo: "CUIT/CUIL",
        id: "cuit"
      },
      {
        titulo: "CBU",
        id: "cbu"
      },
      {
        titulo: "Email personal",
        id: "email"
      },
      {
        titulo: "Dirección",
        id: "direccionCompleta"
      },
      {
        titulo: "Celular",
        id: "telefonoCelular"
      },
      {
        titulo: "Teléfono",
        id: "telefonoAlternativo"
      }
    ]);

    return model;
  }
});
