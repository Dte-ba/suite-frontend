import Ember from "ember";
import QueryParams from "ember-parachute";
import { task } from "ember-concurrency";

export const parametros = new QueryParams({
  pagina: { defaultValue: 1, refresh: true, replace: true },
  busqueda: { defaultValue: null, refresh: true, replace: true },
  programa: { defaultValue: "", refresh: true, replace: true },
  modalidad: { defaultValue: "", refresh: true, replace: true },
  region: { defaultValue: "", refresh: true, replace: true },
  nivel: { defaultValue: "", refresh: true, replace: true },
  tipoDeGestion: { defaultValue: "", refresh: true, replace: true },
  ordenamiento: { defaultValue: "", refresh: true, replace: true },
  piso: { defaultValue: "", refresh: true, replace: true },
  llave: { defaultValue: "", refresh: true, replace: true },
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
    let soloSuRegion = !this.get("perfil").tienePermiso("perfil.global");

    if (soloSuRegion) {
      this.set(
        "region",
        this.get("perfil")
          .obtenerRegion()
          .get("id")
      );
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
        nombre: "programa",
        componente: "suite-filtros/componentes/modelo",
        deshabilitado: false,
        etiquetaTodos: "Todos",
        fila: 2
      },
      {
        nombre: "modalidad",
        componente: "suite-filtros/componentes/modelo",
        deshabilitado: false,
        etiquetaTodos: "Todas",
        fila: 2
      },
      {
        nombre: "tipoDeGestion",
        componente: "suite-filtros/componentes/modelo",
        deshabilitado: false,
        etiquetaTodos: "Todos",
        fila: 2
      },
      {
        nombre: "nivel",
        componente: "suite-filtros/componentes/modelo",
        deshabilitado: false,
        etiquetaTodos: "Todos",
        fila: 2
      },
      {
        nombre: "piso",
        componente: "suite-filtros/componentes/estadoPiso",
        fila: 2
      },
      {
        nombre: "llave",
        componente: "suite-filtros/componentes/llave",
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
    let data = yield this.store.query("escuela", query);
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

    query.conformada = false;
    query.page = this.get("pagina");
    query.query = this.get("busqueda");

    if (this.get("region")) {
      let region = yield this.store.find("region", this.get("region"));
      query.localidad__distrito__region__numero = region.get("numero");
    }

    if (this.get("modalidad")) {
      query.modalidad = this.get("modalidad");
    }

    if (this.get("programa")) {
      query.programa_in = this.get("programa");
    }

    if (this.get("nivel")) {
      query.nivel = this.get("nivel");
    }

    if (this.get("tipoDeGestion")) {
      query.tipoDeGestion = this.get("tipoDeGestion");
    }

    if (this.get("ordenamiento")) {
      query.sort = this.get("ordenamiento");
    }

    if (this.get("piso")) {
      query.piso = this.get("piso");
    }

    if (this.get("llave")) {
      query.llave = this.get("llave");
    }

    if (this.get("distrito")) {
      query.distrito = this.get("distrito");
    }

    if (this.get("localidad")) {
      query.localidad = this.get("localidad");
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
    cuandoCambiaOrdenamiento(ordenamiento) {
      this.set("ordenamiento", ordenamiento);
    }
  }
});
