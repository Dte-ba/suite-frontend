import Ember from "ember";
import QueryParams from "ember-parachute";
import { task } from "ember-concurrency";

export const parametros = new QueryParams({
  perfil: { refresh: true, replace: true, defaultValue: null },
  pagina: { refresh: true, replace: true, defaultValue: 1 },
  filtro: { refresh: true, replace: true, defaultValue: "" }
});

export default Ember.Controller.extend(parametros.Mixin, {
  reset(_, isExiting) {
    if (isExiting) {
      this.resetQueryParams();
    }
  },

  setup() {
    this.actualizar();
  },

  queryParamsDidChange() {
    this.actualizar();
  },

  actualizar() {
    this.get("obtenerListaDePersonas").perform();
  },

  obtenerListaDePersonas: task(function*() {
    let query = {};
    let parametros = this.get("allQueryParams");

    query.activos = true;
    query.page = parametros.pagina;
    query.query = parametros.filtro;

    let data = yield this.get("store").query("perfil", query);
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  actions: {
    limpiarParametros() {
      this.resetQueryParams();
    }
  }
});
