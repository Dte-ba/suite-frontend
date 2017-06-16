import Component from "ember-fullcalendar/components/full-calendar";
import Ember from "ember";

export default Component.extend({
  didInsertElement() {
    this._super();
    this.forceResize();
  },

  alternarFinesDeSemana: Ember.observer("mostrarFinesDeSemana", function() {
    const fc = this.$();
    fc.fullCalendar("option", "weekends", this.get("mostrarFinesDeSemana"));
    this.forceResize();
  }),

  forceResize() {
    $(window).resize();
  }
});
