import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      eventos: this.store.findAll("evento"),
      columnas: [
        {
          propertyName: "titulo",
          title: "Título"
        },
        {
          propertyName: "fechainicio",
          title: "Fecha de inicio"
        }
      ]
    });
  }
});
