import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(model) {
    model.set('filaDatosAdministrativos', [
      {
        titulo: 'Fecha de ingreso',
        id: 'fechaDeIngreso',
      },
    ]);

    model.set('filaDatosPersonales', [
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
    ]);

    let apellido = model.get('apellido');
    this.set('breadCrumb', {title: `Usuario ${apellido}`});

    return model;
  }
});
