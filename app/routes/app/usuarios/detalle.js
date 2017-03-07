import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(model) {
    model.filaDatosAdministrativos = [
      {
        titulo: 'Nombre',
        id: 'nombre',
      }, {
        titulo: 'Apellido',
        id: 'apellido',
      }
    ];

    model.filaDatosPersonales = [
      {
        titulo: 'Fecha de nacimiento',
        id: 'fechadenacimiento',
      }, {
        titulo: 'Apellido',
        id: 'apellido',
      },
      {
        titulo: 'DNI',
        id: 'dni',
      },
      {
        titulo: 'CUIT/CUIL',
        id: 'cuit',
      },
    ];

    return model;
  }
});
