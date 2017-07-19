import Component from "ember-fullcalendar/components/full-calendar";
import Ember from "ember";
import { task, timeout } from "ember-concurrency";

export default Component.extend({
  didInsertElement() {
    this._super();
    this.sincronizar();
    //this.get("temporizador").perform();
  },

  /*
  temporizador: task(function*() {
    // eslint no-constant-condition: ["error", { "checkLoops": false }]
    while (true) {
      yield timeout(2000);
      this.forceResize();
    }
  }),
  */

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
