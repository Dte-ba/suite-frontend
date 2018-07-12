import Ember from "ember";
import QueryParams from "ember-parachute";
import { task } from "ember-concurrency";

export const parametros = new QueryParams({
  perfil: { refresh: true, replace: true, defaultValue: null },
  pagina: { refresh: true, replace: true, defaultValue: 1 },
  busqueda: { defaultValue: null, refresh: true, replace: true },
  region: { defaultValue: "", refresh: true, replace: true },
  ordenamiento: { defaultValue: "", refresh: true, replace: true }
});

export default Ember.Controller.extend(parametros.Mixin, {
  filtros: null,
  columnas: null,

  reset(_, isExiting) {
    if (isExiting) {
      this.resetQueryParams();
    }
  },

  setup() {
    this.definirFiltros();
    this.definirColumnas();
    this.actualizar();
  },

  definirColumnas() {
    this.set("columnas", [
      {
        atributo: "nombreCompleto",
        titulo: "Apellido y nombre",
        ruta: "app.personas.detalle",
        ordenamiento: "nombre"
      },
      {
        atributo: "region.numero",
        titulo: "Región",
        ordenamiento: "region__numero"
      },
      {
        atributo: "cargo.nombre",
        titulo: "Cargo"
      },
      {
        atributo: "cuit",
        titulo: "CUIL/CUIT"
      },
      {
        atributo: "emailLaboral",
        titulo: "Email Laboral"
      },
      {
        titulo: "Grupo",
        componente: "suite-detalle/group",
        ordenamiento: "group__name"
      },
      {
        titulo: "Contrato",
        componente: "suite-detalle/contrato"
      },
      {
        atributo: "fechaDeIngreso",
        titulo: "Fecha de Ingreso",
        fecha: true
      }
    ]);
  },

  definirFiltros() {
    this.set("filtros", [
      {
        nombre: "busqueda",
        componente: "suite-filtros/componentes/input",
        etiqueta: "Nombre / DNI / cargo",
        deshabilitado: false,
        fila: 1
      },
      {
        nombre: "region",
        componente: "suite-filtros/componentes/region",
        etiqueta: "Region",
        deshabilitado: false,
        fila: 1
      }
    ]);
  },

  queryParamsDidChange() {
    this.actualizar();
  },

  tarea: task(function*() {
    let query = yield this.get("crearDiccionarioQuery").perform();
    let data = yield this.store.query("perfil", query);
    let meta = data.get("meta");

    return { data, meta };
  }),

  crearDiccionarioQuery: task(function*() {
    let query = {};

    query.activos = true;
    query.page = this.get("pagina");
    query.query = this.get("busqueda");

    if (this.get("ordenamiento")) {
      query.sort = this.get("ordenamiento");
    }

    if (this.get("region")) {
      let region = yield this.store.find("region", this.get("region"));
      query.region = region.get("numero");
    }

    return query;
  }).drop(),

  actualizar() {
    this.get("tarea").perform();
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
