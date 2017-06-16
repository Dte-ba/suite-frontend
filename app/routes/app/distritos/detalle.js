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
      }
    ];

    model.set("columnas", columnas);

    //let nombre = model.get("nombre");
    // this.set("breadCrumb", { title: `Detalle del distrito ${nombre}` });

    // return this.get("store").findAll("localidad");
  }
});
