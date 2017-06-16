import Ember from "ember";

export default Ember.Route.extend({
  breadCrumb: {
    title: "Detalle"
  },

  afterModel(model) {
    let columnas = [
      {
        title: "Nombre",
        propertyName: "nombre"
      },
      {
        title: "Localidades",
        propertyName: "localidadesComoCadena"
      }
    ];

    model.set("columnas", columnas);

    let numero = model.get("numero");
    this.set("breadCrumb", { title: `Detalle de la región ${numero}` });

    return model;
  }
});
