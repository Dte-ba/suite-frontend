import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Route.extend({
  obtenerEventos: task(function*() {
    let model = this.modelFor(this.routeName);

    let data = yield this.store.query("evento", {
      page: model.pagina,
      query: model.filtro
    });

    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  actualizar() {
    this.get("obtenerEventos").perform();
  },

  afterModel() {
    this.actualizar();
  },

  model() {
    return Ember.RSVP.hash({
      pagina: 1,
      filtro: "",

      tareaEventos: this.get("obtenerEventos"),
      columnas: [
        {
          titulo: "Inicio",
          componente: "suite-detalle/fecha-acciones-lista"
        },
        {
          titulo: "Fin",
          componente: "suite-detalle/fecha-acciones-lista"
        },
        {
          titulo: "Título",
          atributo: "titulo",
          ruta: "app.agenda.detalle"
        },
        {
          titulo: "Region",
          atributo: "escuela.localidad.distrito.region.numero"
        },
        {
          titulo: "CUE",
          componente: "suite-detalle/cue"
        },
        {
          titulo: "Responsable",
          componente: "suite-detalle/responsable"
        },
        {
          titulo: "Acta",
          componente: "suite-detalle/acta-de-evento"
        },
        {
          titulo: "Traslado",
          componente: "suite-detalle/traslado"
        }
      ]
    });
  },

  actions: {
    alIngresarFiltro(valor) {
      let model = this.modelFor(this.routeName);
      Ember.set(model, "filtro", valor);
      Ember.set(model, "pagina", 1);
      this.actualizar();
    },
    cuandoCambiaPagina(pagina) {
      let model = this.modelFor(this.routeName);
      Ember.set(model, "pagina", pagina);
      this.actualizar();
    }
  }
});
