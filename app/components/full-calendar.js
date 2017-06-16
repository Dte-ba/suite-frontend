import Component from "ember-fullcalendar/components/full-calendar";
import Ember from "ember";

export default Component.extend({
  didInsertElement() {
    this._super();
    this.sincronizar();
  },

  alternarFinesDeSemana: Ember.observer("mostrarFinesDeSemana", function() {
    this.sincronizar();
  }),

  sincronizar() {
    const fc = this.$();
    fc.fullCalendar("option", "weekends", this.get("mostrarFinesDeSemana"));
    this.forceResize();
  },

  forceResize() {
    $(window).resize();
  }
});
