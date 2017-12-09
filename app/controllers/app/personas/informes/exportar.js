import Ember from "ember";
import QueryParams from "ember-parachute";
import { task } from "ember-concurrency";
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
  perfil_id: {
    defaultValue: null,
    refresh: true,
    replace: true
  }
});

export default Ember.Controller.extend(parametros.Mixin, {
  ajax: Ember.inject.service(),

  reset({ queryParams }, isExiting) {
    if (isExiting) {
      this.resetQueryParams();
    }
  },

  setup() {
    this.get("tareaExportarInforme").perform();
  },

  tareaExportarInforme: task(function*() {
    let base = ENV.API_URL;
    let url = "";

    let { perfil_id, desde, hasta } = this.get("allQueryParams");

    url = `${base}/api/informes?perfil_id=${perfil_id}&desde=${desde}&hasta=${hasta}&formato=pdf`;

    let data = yield this.get("ajax").raw(url, {
      dataType: "binary",
      xhrFields: {
        responseType: "blob"
      }
    });

    const blob_url = URL.createObjectURL(data.response);

    const dl = document.createElement("a");
    dl.href = blob_url;
    dl.download = `informe_${perfil_id}_${desde}_${hasta}.pdf`;
    document.body.appendChild(dl);
    dl.click();

    Ember.run.later(() => {
      URL.revokeObjectURL(blob_url);
    }, 2000);

    return data;
  }).drop()
});
