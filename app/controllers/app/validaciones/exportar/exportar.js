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
  estado: {
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
    let { estado, desde, hasta } = this.get("allQueryParams");

    let url = `/api/validaciones/export?inicio=${desde}&fin=${hasta}&estado=${estado}`;
    let nombre = `validaciones_${estado}_${desde}_${hasta}.xls`;

    return yield this.get("descargas").iniciar(url, nombre);
  }).drop()
});
