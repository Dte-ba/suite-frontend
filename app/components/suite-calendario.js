import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Component.extend({
  cargando: false,
  fc: null,
  perfil: null,
  ajax: Ember.inject.service(),

  tareaSolicitarEventos: task(function*(fecha_inicio, fecha_fin, callback) {
    let formato = "YYYY-MM-DD";

    let i = fecha_inicio.format(formato);
    let f = fecha_fin.format(formato);
    let perfil = this.get("perfil");

    let base = ENV.API_URL;
    let url = `${base}/api/eventos/agenda?inicio=${i}&fin=${f}&perfil=${perfil}`;
    let resultado = yield this.get("ajax").request(url);

    let eventos_convertidos = resultado.data.eventos.map(e => {
      return {
        id: e.id,
        title: e.titulo,
        start: e.fecha + "T" + e.inicio,
        end: e.fecha_fin + "T" + e.fin,
        url: "/#/app/agenda/detalle/" + e.id,
        escuela: e.escuela,
        traslado: e.requiereTraslado
      };
    });

    callback(eventos_convertidos);

    return eventos_convertidos;
  }).drop(),

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
      },
      eventRender(evento, element) {

        element.addClass("evento-con-acta");

        element.html(`
          <p class="evento-titulo">${evento.title}</p>
          <p>${evento.escuela}</p>


          <!--
          <p><small>Nombre Autor</small></p>

          <p>
            <a href="/" class="color-gris"><i class="ui file icon"></i></a>
          </p>
          -->

          `);

          if (evento.traslado === true) {
            element.append('<p><i class="ui car icon"></i>');
          }

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
