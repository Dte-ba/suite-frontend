import Ember from "ember";
import { task } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  store: Ember.inject.service(),
  perfilService: Ember.inject.service("perfil"),
  cargando: Ember.computed.alias("tareaSolicitarEventos.last.isRunning"),
  fc: null,
  perfil: null,
  perfilPreSeleccionado: null,

  tareaSolicitarEventos: task(function*(fecha_inicio, fecha_fin, callback) {
    let formato = "YYYY-MM-DD";

    let i = fecha_inicio.format(formato);
    let f = fecha_fin.format(formato);

    let region = this.get("region");

    let numeroDeRegion = region.get("numero");

    let base = ENV.API_URL;
    let url = "";

    if (this.get("perfilPreSeleccionado.id")) {
      let idPerfil = this.get("perfilPreSeleccionado.id");
      url = `${base}/api/eventos-de-robotica/agenda?inicio=${i}&fin=${f}&perfil=${idPerfil}&region=${numeroDeRegion}`;
    } else {
      url = `${base}/api/eventos-de-robotica/agenda?inicio=${i}&fin=${f}&region=${numeroDeRegion}`;
    }

    let resultado = yield this.get("ajax").request(url);

    let eventos_convertidos = resultado.data.eventos.map(e => {
      return {
        id: e.id,
        title: e.titulo,
        start: e.fecha + "T" + e.inicio,
        end: e.fecha_fin + "T" + e.fin,
        url: "/#/robotica/agenda/detalle/" + e.id,
        resumen: e.resumenParaCalendario,
        acta: e.acta
      };
    });

    return callback(eventos_convertidos);
  }).drop(),

  didInsertElement() {
    let header = {
      left: "prev,next today",
      center: "title",
      right: "month,basicWeek,agendaDay"
    };

    this.set("region", this.get("perfilService").obtenerRegion());
    this.set("perfilPreSeleccionado", this.get("perfilService.miPerfil"));

    var permiso = this.get("perfilService").tienePermiso("perfil.global");
    var limite = false;

    // Si tiene permiso global, aplica un límite de eventos para convertir
    // en listas las tarjetas de eventos agrupadas.
    if (permiso === true) {
      limite = 2;
    }

    let fc = this.$("#calendar").fullCalendar({
      editable: false,
      locale: "es",
      header: header,
      eventLimit: limite,
      weekends: this.get("mostrarFinesDeSemana"),

      buttonText: {
        today: "hoy",
        month: "mes",
        week: "semana",
        day: "dia",
        list: "lista"
      },

      events: (start, end, timezone, callback) => {
        this.get("tareaSolicitarEventos").perform(start, end, callback);
      },

      eventRender(evento, element) {
        let resumen = evento.resumen;
        let titulo = resumen.titulo;
        let region = resumen.region;
        let distrito = resumen.distrito;
        let localidad = resumen.localidad;
        let escuela = resumen.escuela;
        let tallerista = resumen.tallerista;
        let inicio = resumen.inicio;
        let fin = resumen.fin;

        if (evento.resumen != "Sin resumen") {
          element.html(`
            <div class="">${inicio} - ${fin}</div>`);
          if (evento.acta) {
            element.addClass("evento-con-acta");
            element.append(
              '<div class="ui right corner label"><i class="ui blue file icon"></i></div>'
            );
          } else {
            element.addClass("evento-sin-acta");
            element.append(
              '<div class="ui right corner label"><i class="ui red file outline icon"></i></div>'
            );
          }
          element.append(`
            <div class="ui tiny header">${titulo}</div>
            <div class="ui relaxed divided list">
              <div class="ui item">
                <i class="ui university icon"></i>${escuela}
                </div>
              <div class="ui item">
                <i class="ui map marker icon"></i>${localidad}, ${distrito} (${region})
                </div>
              <div class="ui item">
                <i class="ui user icon"></i> ${tallerista}
                </div>
            </div>

          `);
        } else {
          element.html(`
            <p class="evento-titulo">${evento.title}</p>
            `);
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
  },

  actualizar() {
    let fc = this.get("fc");
    fc.fullCalendar("refetchEvents");
  },

  actions: {
    cuandoSeleccionaRegion(region) {
      this.set("region", region);
      this.actualizar();
    },
    cuandoSeleccionaResponsable(responsable) {
      this.set("perfilPreSeleccionado", responsable);
      this.actualizar();
    }
  }
});
