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
    query.page_size = model.limite || 15;

    query.escuela__localidad__distrito__region__numero = Ember.get(
      model,
      "region.numero"
    );

    if (model.perfil && model.perfil.id) {
      query.perfil = model.perfil.id;
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
    let perfilPreSeleccionado = null;

    if (soloSuRegion) {
      regionPreSeleccionada = this.get("perfilService").obtenerRegion();
      perfilPreSeleccionado = this.get("perfilService.miPerfil");
    } else {
      perfilPreSeleccionado = null;
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
      perfil: perfilPreSeleccionado,

      region: regionPreSeleccionada,

      columnas: [
        {
          titulo: "Inicio",
          // componente: "suite-detalle/fecha-acciones-lista"
          atributo: "fecha_inicio",
          fechaHora: true,
          centrar: true
        },
        {
          titulo: "Fin",
          // componente: "suite-detalle/fecha-acciones-lista"
          atributo: "fecha_fin",
          fechaHora: true,
          centrar: true
        },
        {
          titulo: "Título",
          atributo: "titulo",
          ruta: "app.agenda.detalle",
          ajustar: true,
        },
        {
          titulo: "Region",
          atributo: "escuela.localidad.distrito.region.numero",
          centrar: true
        },
        {
          titulo: "Distrito",
          atributo: "escuela.localidad.distrito.nombre",
          centrar: true
        },
        {
          titulo: "CUE",
          componente: "suite-detalle/cue"
        },
        {
          titulo: "Responsable",
          componente: "suite-detalle/responsable",
          centrar: true,
          ajustar: false
        },
        {
          titulo: "Acta",
          componente: "suite-detalle/acta-de-evento",
          centrar: true
        },
        {
          titulo: "Traslado",
          componente: "suite-detalle/traslado",
          centrar: true
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
    cuandoCambiaLimite(cantidad) {
      let model = this.modelFor(this.routeName);
      Ember.set(model, "limite", cantidad);
      this.actualizar();
    },
    cuandoSeleccionaRegion(region) {
      let model = this.modelFor(this.routeName);
      Ember.set(model, "region", region);
      Ember.set(model, "pagina", 1);

      /* Reinicia la selección de perfil */
      let perfilPreSeleccionado = null;

      if (this.get("perfilService").tienePermiso("perfil.global")) {
        perfilPreSeleccionado = null;
      } else {
        perfilPreSeleccionado = this.get("perfilService.miPerfil");
      }
      Ember.set(model, "perfil", perfilPreSeleccionado);

      this.actualizar();
    },
    cuandoSeleccionaResponsable(perfil) {
      let model = this.modelFor(this.routeName);
      Ember.set(model, "perfil", perfil);
      Ember.set(model, "pagina", 1);
      this.actualizar();
    }
  }
});
