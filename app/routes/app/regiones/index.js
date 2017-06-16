import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      regiones: this.store.findAll("region"),
      distritos: this.store.findAll("distrito"),
      columnas: [
        {
          propertyName: "numero",
          title: "Número"
        },
        {
          propertyName: "distritosComoCadena",
          title: "Distritos"
        },
        {
          title: "Acciones",
          template: "tablas/regiones/acciones"
        }
      ]
    });
  }
});
