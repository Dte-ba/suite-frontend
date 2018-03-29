import Ember from "ember";
import QueryParams from "ember-parachute";
import ENV from "suite-frontend/config/environment";

export const parametros = new QueryParams({
  desde: {
    defaultValue: null,
    refresh: true,
    replace: true
  },
  hasta: {
    defaultValue: null,
    refresh: true,
    replace: true
  },
  estado: {
    defaultValue: null,
    refresh: true,
    replace: true
  }
});

export default Ember.Controller.extend(parametros.Mixin, {
  ajax: Ember.inject.service(),

  reset(isExiting) {
    if (isExiting) {
      this.resetQueryParams();
    }
  },

  actions: {
    exportarPaquetes() {
      let { desde, hasta, estado } = this.getProperties("desde", "hasta", "estado");

      let url = `api/trabajos/exportar_paquetes?inicio=${desde}&fin=${hasta}&estado=${estado}`;
      return this.get("ajax").request(`${ENV.API_URL}/${url}`);
    }
  }
});
