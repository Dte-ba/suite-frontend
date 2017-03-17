import Ember from 'ember';

export default Ember.Route.extend({
  breadCrumb: {title: "Detalle de usuario"},

  afterModel(model) {
    model.set('filaDatosAdministrativos', [
      {
        titulo: 'Fecha de ingreso',
        id: 'fechaDeIngreso',
      },
    ]);

    model.set('filaDatosPersonales', [
      {
        titulo: 'Nombre',
        id: 'nombre',
      },
      {
        titulo: 'Apellido',
        id: 'apellido',
      },
      {
        titulo: 'Fecha de nacimiento',
        id: 'fechadenacimiento',
      },
      {
        titulo: 'DNI',
        id: 'dni',
      },
      {
        titulo: 'CUIT/CUIL',
        id: 'cuit',
      },
    ]);

    return model;
  }
});
