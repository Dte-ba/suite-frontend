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
  criterio: {
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
    exportarTalleres() {
      let { desde, hasta, criterio } = this.getProperties(
        "desde",
        "hasta",
        "criterio"
      );

      let url = `api/trabajos/exportar_talleres_de_robotica?inicio=${desde}&fin=${hasta}&criterio=${criterio}`;
      return this.get("ajax").request(`${ENV.API_URL}/${url}`);
    }
  }
});
