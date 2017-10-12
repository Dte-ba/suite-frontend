import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  perfilService: Ember.inject.service("perfil"),

  obtenerEventos: task(function*() {
    let query = {};

    let model = this.modelFor(this.routeName);

    query.page = model.pagina;
    query.query = model.filtro;

    query.escuela__localidad__distrito__region__numero = Ember.get(
      model,
      "region.numero"
    );

    if (!this.get("perfilService").tienePermiso("perfil.global")) {
      query.perfil = this.get("perfilService").data.idPerfil;
    }

    let data = yield this.store.query("evento", query);
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
    let soloSuRegion = !this.get("perfilService").tienePermiso("perfil.global");
    let regionPreSeleccionada = null;

    if (soloSuRegion) {
      regionPreSeleccionada = this.get("perfilService").obtenerRegion();
    } else {
      regionPreSeleccionada = Ember.Object.create({
        nombre: "Todas las regiones",
        numero: ""
      });
    }

    return {
      tareaEventos: this.get("obtenerEventos"),

      /* valores a utilizar como filtros */
      pagina: 1,
      filtro: "",
      deshabilitarSeleccionDeRegion: soloSuRegion,

      region: regionPreSeleccionada,

      columnas: [
        {
          titulo: "Inicio",
          // componente: "suite-detalle/fecha-acciones-lista"
          atributo: "fecha_inicio",
          fechaHora: true
        },
        {
          titulo: "Fin",
          // componente: "suite-detalle/fecha-acciones-lista"
          atributo: "fecha_fin",
          fechaHora: true
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
          titulo: "Distrito",
          atributo: "escuela.localidad.distrito.nombre"
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
    };
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
    },
    cuandoSeleccionaRegion(region) {
      let model = this.modelFor(this.routeName);
      Ember.set(model, "region", region);
      Ember.set(model, "pagina", 1);
      this.actualizar();
    }
  }
});
