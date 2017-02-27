import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      usuarios: this.store.findAll('user'),
      columnas: [
          {
            "propertyName": "id",
            "title": "Identificador"
          },
          {
            "propertyName": "username",
            "title": "Nombre de usuario"
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
