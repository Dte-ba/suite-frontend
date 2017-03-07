import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(model) {
    let columnas = [
      {
        title: "Número",
        propertyName: "numero"
      },
      {
        title: "Nombre",
        propertyName: "nombre"
      },
    ];

    model.set('columnas', columnas);
    return model;
  }
});
