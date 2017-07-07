import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      perfiles: this.store.findAll("perfil"),
      columnas: [
        {
          propertyName: "nombreCompleto",
          title: "Nombre completo",
          template: "tablas/usuarios/nombre"
        },
        /*
        {
          propertyName: "regionComoCadena",
          title: "Región"
        },
        {
          propertyName: "cargoComoCadena",
          title: "Cargo"
        },
        */
        {
          propertyName: "dni",
          title: "DNI"
        },
        {
          propertyName: "cuit",
          title: "CUIL/CUIT"
        },
        {
          propertyName: "contratoComoCadena",
          title: "Programa/Contrato"
        },
        {
          propertyName: "fechaDeIngreso",
          title: "Fecha de ingreso"
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
