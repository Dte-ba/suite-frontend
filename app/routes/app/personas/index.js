import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      perfiles: this.store.findAll("perfil"),
      columnas: [
        {
          propertyName: "nombreCompleto",
          title: "Nombre completo"
        },
        {
          propertyName: "regionComoCadena",
          title: "Región"
        },
        {
          propertyName: "cargoComoCadena",
          title: "Cargo"
        },
        {
          propertyName: "cuit",
          title: "CUIL/CUIT"
        },
        {
          propertyName: "email",
          title: "E-mail"
        },
        {
          propertyName: "telefonoCelular",
          title: "Celular"
        },
        {
          propertyName: "contratoComoCadena",
          title: "Programa/Contrato"
        },
        {
          propertyName: "fechaDeIngreso",
          title: "Fecha de ingreso"
        },
        {
          title: "Acciones",
          template: "tablas/usuarios/acciones"
        }
      ]
    });
  },

  actions: {
    crearUnUsuarioNuevo() {
      alert("asdasd");
    }
  }
});
