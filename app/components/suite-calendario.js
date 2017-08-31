import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Component.extend({
  cargando: false,
  fc: null,
  perfil: null,
  ajax: Ember.inject.service(),
  store: Ember.inject.service(),

  tareaSolicitarEventos: task(function*(fecha_inicio, fecha_fin, callback) {
    let formato = "YYYY-MM-DD";

    let i = fecha_inicio.format(formato);
    let f = fecha_fin.format(formato);
    let perfil = this.get("perfil");
    let region = this.get("region");

    let base = ENV.API_URL;
    let url = `${base}/api/eventos/agenda?inicio=${i}&fin=${f}&perfil=${perfil}&region=${region}`;
    let resultado = yield this.get("ajax").request(url);

    let eventos_convertidos = resultado.data.eventos.map(e => {
      return {
        id: e.id,
        title: e.titulo,
        start: e.fecha + "T" + e.inicio,
        end: e.fecha_fin + "T" + e.fin,
        url: "/#/app/agenda/detalle/" + e.id,
        // escuela: e.escuela,
        traslado: e.requiereTraslado,
        resumen: e.resumenParaCalendario,
        acta: e.acta_legacy
      };
    });

    // Obtiene todas las promesas de escuelas
    // let escuelas = Ember.RSVP.all(
    //   eventos_convertidos.map(e =>
    //     this.get("store").findRecord("escuela", e.escuela.id)
    //   )
    // );

    let responsables = Ember.RSVP.all(
      eventos_convertidos.map(e => {
        if (e.responsable) {
          return this.get("store").findRecord("perfil", e.responsable.id);
        } else {
          return {
            toJSON: function() {
              return {};
            }
          };
        }
      })
    );

    // Espera a que todas las promesas se cumplan.
    Ember.RSVP
      .hash({
        // escuelas,
        responsables
      })
      .then(data => {
        callback(
          eventos_convertidos.map((e, index) => {
            // e.escuela = data.escuelas[index].toJSON();
            e.responsable = data.responsables[index].toJSON();
            return e;
          })
        );
      });

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
        let resumen = evento.resumen;
        let titulo = resumen.titulo;
        let categoria = resumen.categoria;
        let region = resumen.region;
        let escuela = resumen.escuela;
        let responsable = resumen.responsable;

        if (evento.resumen != "Sin resumen") {
          element.html(`
            <p class="evento-titulo">${titulo}</p>
            <p class="">${categoria}</p>
            <p class="evento-titulo">${region} - ${escuela}</p>
            <p class="evento-titulo">${responsable}</p>

          `);
        } else {
          element.html(`
            <p class="evento-titulo">${evento.title}</p>
            `);
        }
        if (evento.acta) {
          element.addClass("evento-con-acta");
          element.append('<i class="ui green file icon"></i>');
        } else {
          element.addClass("evento-sin-acta");
          element.append('<i class="ui yellow file icon"></i>');
        }
        if (evento.traslado === true) {
          element.append('<i class="ui grey car icon"></i>');
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
