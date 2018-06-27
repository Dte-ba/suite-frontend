import Ember from "ember";
import ENV from "suite-frontend/config/environment";

export default Ember.Component.extend({
  descargas: Ember.inject.service(),
  ajax: Ember.inject.service(),
  store: Ember.inject.service(),

  linkDescarga: Ember.computed("model.idDevolucion", function() {
    var linkPaquete;
    let valor = this.get("model.idDevolucion");
    if (valor == 0 || valor == null) {
      linkPaquete = false;
    } else {
      linkPaquete = true;
    }
    return linkPaquete;
  }),

  actions: {
    marcarComoDescargado(paquete) {
      let base = ENV.API_URL;
      let url = `${base}/api/paquetes/${paquete.id}/marcar-como-descargado`;

      this.get("descargas").iniciarDesdeURL(paquete.get("zipDevolucion"));

      this.get("ajax")
        .request(url, { method: "POST" })
        .then(() => {
          this.get("store").findRecord("paquete", paquete.get("id"));
        });
    }
  }
});
