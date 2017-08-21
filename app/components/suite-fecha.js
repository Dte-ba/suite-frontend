import Ember from "ember";
import moment from "moment";

export default Ember.Component.extend({
  fechaConvertida: Ember.computed("fecha", function() {
    return moment(this.get("fecha")).format("DD/MM/YYYY");
  }),

  tiempoTranscurrido: Ember.computed("fecha", function() {
    return moment(this.get("fecha")).fromNow();
  })
});
