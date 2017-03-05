import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      regiones: this.store.findAll('region'),
      municipios: this.store.findAll('municipio'),
      columnas: [
          {
            "propertyName": "numero",
            "title": "Número"
          },
          {
            "propertyName": "municipiosComoCadena",
            "title": "Municipios"
          },
          {
            "title": "Acciones",
            "template": "tablas/usuarios/acciones"
          }
      ]
    });
  }
});
