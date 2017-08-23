import Ember from "ember";
import { task, timeout } from "ember-concurrency";

export default Ember.Component.extend({
  cargando: false,
  fc: null,

  tareaSolicitarEventos: task(function*(comienzo, fin, callback) {
    /*
    let formato = "YYYY-MM-DD";

    let comienzo_como_cadena = comienzo.format(formato);
    let fin_como_cadena = fin.format(formato);

    console.log("Está por solicitar los eventos", {
      comienzo_como_cadena,
      fin_como_cadena
    });
    */
    comienzo = "?";

    yield timeout(2000);

    let eventos = [
      {
        title: "Evento de prueba -- demo",
        start: new Date(),
        end: fin
      }
    ];

    callback(eventos);
    return eventos;
  }),

  didInsertElement() {
    let header = {
      left: "prev,next today",
      center: "title",
      right: "month,basicWeek,agendaDay"
    };

    let fc = this.$("#calendar").fullCalendar({
      editable: false,
      locale: "es",
      header: header,
      weekends: this.get("mostrarFinesDeSemana"),

      dayClick: () => {
        //alert("Ha pulsado sobre un día");
      },

      loading: (isLoading /*, view*/) => {
        this.set("cargando", isLoading);
      },

      events: (start, end, timezone, callback) => {
        this.get("tareaSolicitarEventos").perform(start, end, callback);
      }
    });

    this.set("fc", fc);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.$("#calendar").fullCalendar("destroy");
  },

  alternarFinesDeSemana: Ember.observer("mostrarFinesDeSemana", function() {
    this.sincronizar();
  }),

  sincronizar() {
    let fc = this.get("fc");
    fc.fullCalendar("option", "weekends", this.get("mostrarFinesDeSemana"));
  }
});
