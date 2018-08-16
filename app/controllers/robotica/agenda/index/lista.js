import Ember from "ember";
import QueryParams from "ember-parachute";
import { task, timeout } from "ember-concurrency";

const fechaDesde = moment(new Date())
  .startOf("year")
  .format("YYYY-MM-DD");
const fechaHasta = moment(new Date())
  .endOf("year")
  .format("YYYY-MM-DD");

export const parametros = new QueryParams({
  pagina: { defaultValue: 1, refresh: true, replace: true },
  limite: { defaultValue: 15, refresh: true, replace: true },
  ordenamiento: { defaultValue: "", refresh: true, replace: true },

  busqueda: { defaultValue: null, refresh: true, replace: true },

  region: { defaultValue: "", refresh: true, replace: true },
  distrito: { defaultValue: "", refresh: true, replace: true },
  localidad: { defaultValue: "", refresh: true, replace: true },

  responsable: { defaultValue: "", refresh: true, replace: true },
  participante: { defaultValue: "", refresh: true, replace: true },

  desde: { defaultValue: fechaDesde, refresh: true, replace: true },
  hasta: { defaultValue: fechaHasta, refresh: true, replace: true },

  mostrarFiltrosAvanzados: { defaultValue: "", refresh: true, replace: true }
});

export default Ember.Controller.extend(parametros.Mixin, {
  filtros: null,
  perfil: Ember.inject.service(),
  descargas: Ember.inject.service(),

  setup() {
    this.definirFiltros();
    this.actualizar();
  },

  definirFiltros() {
    let perfil = this.get("perfil");
    let soloSuRegion = !perfil.tienePermiso("perfil.global");

    if (soloSuRegion) {
      this.set("region", perfil.obtenerRegion().get("id"));
    }

    this.set("filtros", [
      {
        nombre: "busqueda",
        componente: "suite-filtros/componentes/input",
        etiqueta: "CUE o nombre",
        deshabilitado: false,
        fila: 1
      },
      {
        componente: "suite-filtros/componentes/distritoLocalidad",
        soloSuRegion: soloSuRegion,
        deshabilitado: false,
        fila: 1
      },
      {
        componente: "suite-filtros/componentes/intervaloDeFechas",
        deshabilitado: false,
        fila: 2
      },
      {
        componente: "suite-filtros/componentes/tallerista",
        deshabilitado: false,
        fila: 2
      }
    ]);
  },

  reset(_, isExiting) {
    if (isExiting) {
      this.resetQueryParams();
    }
  },

  tarea: task(function*() {
    let query = yield this.get("crearDiccionarioQuery").perform();

    let data = yield this.store.query("evento-de-robotica", query);
    let meta = data.get("meta");

    return { data, meta };
  }),

  exportarConFiltros: task(function*() {
    let query = yield this.get("crearDiccionarioQuery").perform();

    let url = `/api/escuelas/export`;
    yield this.get("descargas").iniciar(url, "escuelas.xls", query);
  }),

  crearDiccionarioQuery: task(function*() {
    let query = {};

    yield timeout(10);

    query.page = this.get("pagina");
    query.query = this.get("busqueda");
    query.page_size = this.get("limite");

    query.tallerista__id = this.get("responsable");
    query.perfil = this.get("participante");
    query.escuela__localidad = this.get("localidad");
    query.escuela__localidad__distrito = this.get("distrito");
    query.escuela__localidad__distrito__region__numero = this.get("region");

    query.desde = this.get("desde");
    query.hasta = this.get("hasta");

    if (this.get("ordenamiento")) {
      query.ordering = this.get("ordenamiento");
    }

    return query;
  }).drop(),

  actualizar() {
    this.get("tarea").perform();
  },

  queryParamsDidChange() {
    this.actualizar();
  },

  actions: {
    cambiarParametro(parametro, valor) {
      this.set("pagina", 1);
      this.set(parametro, valor);
    },
    limpiarParametros() {
      this.resetQueryParams();
    },
    cuandoCambiaPagina(pagina) {
      this.set("pagina", pagina);
    },
    cuandoCambiaLimite(limite) {
      this.set("pagina", 1);
      this.set("limite", limite);
    },
    cuandoCambiaOrdenamiento(ordenamiento) {
      this.set("ordenamiento", ordenamiento);
    }
  }
});
