import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      perfiles: this.store.findAll('perfil'),
      columnas: [
          {
            "propertyName": "dni",
            "title": "DNI"
          },
          {
            "propertyName": "nombre",
            "title": "Nombre"
          },
          {
            "propertyName": "apellido",
            "title": "Apellido"
          },
          {
            "title": "Acciones",
            "template": "tablas/usuarios/acciones"
          }
      ]
    })
  },


  actions: {
    crearUnUsuarioNuevo() {
      alert("asdasd");
    }
  }
});
