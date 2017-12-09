import Ember from "ember";
import QueryParams from "ember-parachute";
import { task } from "ember-concurrency";

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
  perfil_id: {
    defaultValue: null,
    refresh: true,
    replace: true
  }
});

export default Ember.Controller.extend(parametros.Mixin, {
  descargas: Ember.inject.service(),

  reset(isExiting) {
    if (isExiting) {
      this.resetQueryParams();
    }
  },

  setup() {
    this.get("tareaExportarInforme").perform();
  },

  tareaExportarInforme: task(function*() {
    let { perfil_id, desde, hasta } = this.get("allQueryParams");

    let url = `/api/informes?perfil_id=${perfil_id}&desde=${desde}&hasta=${hasta}&formato=pdf`;
    let nombre = `informe_${perfil_id}_${desde}_${hasta}.pdf`;

    return yield this.get("descargas").iniciar(url, nombre);
  }).drop()
});
