import Ember from "ember";
import moment from "moment";

export default Ember.Component.extend({
  soloFecha: Ember.computed("fecha", function() {
    return moment(this.get("fecha")).format("DD/MM/YYYY");
  }),
  soloHora: Ember.computed("fecha", function() {
    return moment(this.get("fecha")).format("HH:mm");
  }),
  fechaConvertida: Ember.computed("fecha", function() {
    let soloFecha = moment(this.get("fecha")).format("DD/MM/YYYY");
    let soloHora = moment(this.get("fecha")).format("HH:mm");

    return soloFecha + " a las " + soloHora;
  })
});
