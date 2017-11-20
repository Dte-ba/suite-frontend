import Ember from "ember";
import QueryParams from "ember-parachute";
import { task, timeout } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export const myQueryParams = new QueryParams({
  pagina: {
    defaultValue: 1,
    refresh: true,
    replace: true
  },
  filtro: {
    defaultValue: "",
    refresh: true
  },
  numeroDeRegion: {
    defaultValue: "",
    refresh: true
  },
  deshabilitarSeleccionDeRegion: {
    defaultValue: "",
    refresh: true
  }
});

export default Ember.Controller.extend(myQueryParams.Mixin, {
  ajax: Ember.inject.service(),
  perfilService: Ember.inject.service("perfil"),

  queryParamsChanged: Ember.computed.or(
    "queryParamsState.{pagina,filtro}.changed"
  ),

  estadisticas: Ember.computed(function() {
    return this.get("obtenerEstadisticas").perform({});
  }),

  obtenerEstadisticas: task(function*() {
    yield timeout(500);
    let url = ENV.API_URL + "/api/tareas/estadistica";
    let resultado = yield this.get("ajax").request(url);
    return resultado;
  }).drop(),

  tareaTareas: task(function*() {
    let query = {};

    query.page = this.get("pagina");
    query.query = this.get("filtro");

    let numero_de_region = this.get("region.numero");
    query.escuela__localidad__distrito__region__numero = numero_de_region;

    let data = yield this.get("store").query("tarea", query);

    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  setup(params) {
    let queryParams = params.queryParams;
    let soloSuRegion = !this.get("perfilService").tienePermiso("perfil.global");
    let regionPreSeleccionada = null;

    if (soloSuRegion) {
      regionPreSeleccionada = this.get("perfilService").obtenerRegion();
      console.log(regionPreSeleccionada + "");
    } else {
      if (queryParams.numeroDeRegion) {
        let store = this.get("store");

        debugger;
      } else {
        regionPreSeleccionada = Ember.Object.create({
          nombre: "Todas las regiones",
          numero: ""
        });
      }
    }

    this.set("numeroDeRegion", regionPreSeleccionada.get("numero"));

    this.actualizar(queryParams);
  },

  queryParamsDidChange({ shouldRefresh, queryParams }) {
    if (shouldRefresh) {
      this.actualizar(queryParams);
    }
  },

  reset({ queryParams }, isExiting) {
    if (isExiting) {
      this.resetQueryParams();
    }
  },

  actualizar(queryParams) {
    this.get("tareaTareas").perform();
  },

  actions: {
    limpiarFiltros() {
      this.resetQueryParams();
    },
    crearUnaTareaNueva() {
      return this.transitionToRoute("app.tareas.crear");
    },
    cuandoCambiaPagina(pagina) {
      this.set("pagina", pagina);
      this.actualizar();
    },
    alIngresarFiltro(valor) {
      this.set("filtro", valor);
      this.set("pagina", 1);
      this.actualizar();
    },
    cuandoSeleccionaRegion(region) {
      this.set("region", region);
      this.set("numeroDeRegion", region.get("numero"));
      this.set("pagina", 1);
      this.actualizar();
    }
  }
});
