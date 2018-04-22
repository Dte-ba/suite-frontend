import Ember from "ember";
import QueryParams from "ember-parachute";
import { task } from "ember-concurrency";

export const parametros = new QueryParams({
  pagina: { defaultValue: 1, refresh: true, replace: true },
  limite: { defaultValue: 15, refresh: true, replace: true },
  ordenamiento: { defaultValue: "", refresh: true, replace: true },

  busqueda: { defaultValue: null, refresh: true, replace: true },

  region: { defaultValue: "", refresh: true, replace: true },
  distrito: { defaultValue: "", refresh: true, replace: true },
  localidad: { defaultValue: "", refresh: true, replace: true },

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

    //query.escuela__localidad__distrito__region__numero = Ember.get(model, "region.numero");

    //if (model.perfil && model.perfil.id) {
    //  query.perfil = model.perfil.id;
    //}

    let data = yield this.store.query("evento", query);
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

    query.page = this.get("pagina");
    query.query = this.get("busqueda");
    query.page_size = this.get("limite");

    /*
    if (this.get("region")) {
      let region = yield this.store.find("region", this.get("region"));
      query.localidad__distrito__region__numero = region.get("numero");
    }

    */

    if (this.get("ordenamiento")) {
      query.sort = this.get("ordenamiento");
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
