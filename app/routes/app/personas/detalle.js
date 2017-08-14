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
        id: "cargoComoCadena"
      },
      {
        titulo: "Contrato",
        id: "contratoComoCadena"
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
      },
      {
        titulo: "Estado",
        id: "estadoComoCadena"
      }
      
    ]);

    model.set("filaDatosPersonales", [
      {
        titulo: "Fecha de nacimiento",
        id: "fechadenacimiento"
      },
      {
        titulo: "Título",
        id: "titulo"
      },
      {
        titulo: "Perfil",
        id: "experienciaComoCadena"
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
