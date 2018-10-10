import Ember from "ember";
import QueryParams from "ember-parachute";
import { task, timeout } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export const myQueryParams = new QueryParams({
  pagina: {
    defaultValue: 1,
    refresh: true,
    replace: false
  },
  filtro: {
    defaultValue: "",
    refresh: true
  },
  numeroDeRegion: {
    defaultValue: "",
    refresh: true,
    replace: false
  },
  estadoId: {
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
    let queryParams = this.get("allQueryParams");
    let query = {};

    query.page = queryParams.pagina;

    if (queryParams.filtro) {
      query.search = queryParams.filtro;
    }

    if (queryParams.estadoId) {
      query.estado_de_tarea = queryParams.estadoId;
    }

    if (queryParams.numeroDeRegion) {
      query.escuela__localidad__distrito__region__numero =
        queryParams.numeroDeRegion;
    }

    let data = yield this.get("store").query("tarea", query);
    let meta = data.get("meta");

    return { data, meta };
  }).drop(),

  todosLosEstados: Ember.Object.create({ id: "", nombre: "Todos los estados" }),

  obtenerOpcionesDeEstados() {
    return this.get("store")
      .findAll("estadoDeTarea")
      .then(estados => {
        let listaDeOpciones = estados.toArray();
        listaDeOpciones.insertAt(0, this.get("todosLosEstados"));
        return listaDeOpciones;
      });
  },

  todasLasRegiones: Ember.Object.create({
    nombre: "Todas las regiones",
    numero: ""
  }),

  setup(/*params*/) {
    this.definirFiltros();

    /* Genera el combo de estados */
    this.set("estados", this.obtenerOpcionesDeEstados());

    this.actualizar();
  },

  definirFiltros() {
    let queryParams = this.get("allQueryParams");

    let soloSuRegion = !this.get("perfilService").tienePermiso("perfil.global");
    let regionPreSeleccionada = null;

    this.set("filtro", queryParams.filtro);

    /* Pre-selecciona el estado de acuerdo al queryparam. */
    if (queryParams.estadoId) {
      this.set(
        "estado",
        this.get("store").findRecord("estadoDeTarea", queryParams.estadoId)
      );
    } else {
      this.set("estado", this.get("todosLosEstados"));
    }

    /* Si solo puede ver si región, ignora cualquier parámetro de la URL referida a la región. */
    this.set("deshabilitarSeleccionDeRegion", soloSuRegion);

    if (soloSuRegion) {
      regionPreSeleccionada = this.get("perfilService").obtenerRegion();
      this.set("region", regionPreSeleccionada);
      this.set("numeroDeRegion", regionPreSeleccionada.get("numero"));
    } else {
      if (queryParams.numeroDeRegion) {
        let regiones = this.get("store").peekAll("region");
        let region = regiones.findBy("numero", +queryParams.numeroDeRegion);
        this.set("region", region);
      } else {
        this.set("region", this.get("todasLasRegiones"));
      }
    }
  },

  queryParamsDidChange({ shouldRefresh /*queryParams*/ }) {
    this.definirFiltros();

    if (shouldRefresh) {
      this.actualizar();
    }
  },

  reset({ queryParams }, isExiting) {
    if (isExiting) {
      this.resetQueryParams();
    }
  },

  actualizar() {
    this.get("tareaTareas").perform();
  },

  actions: {
    limpiarFiltros() {
      this.resetQueryParams();
      this.setup();
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
    },
    cuandoSeleccionaEstado(estado) {
      this.set("estado", estado);
      this.set("estadoId", estado.get("id"));
      this.set("pagina", 1);
      this.actualizar();
    }
  }
});
