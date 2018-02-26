import Ember from "ember";
import { task, timeout } from "ember-concurrency";
import ENV from "suite-frontend/config/environment";

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  descargas: Ember.inject.service(),
  progreso: 0,
  resultado: 0,
  archivo: null,
  detalle: [],
  autoiniciar: false,
  autodescargar: false,

  width: Ember.computed("progreso", function() {
    let progreso = this.get("progreso");
    return Ember.String.htmlSafe(`width: ${progreso}%`);
  }),

  didInsertElement() {
    if (this.get("autoiniciar")) {
      this.send("crearTarea");
    }
  },

  trabajo: task(function*() {
    let accionParaIniciar = this.get("accion");

    let data = yield accionParaIniciar();
    let trabajo_id = data.data.trabajo_id;
    let url = `${ENV.API_URL}/api/trabajos/${trabajo_id}/consultar`;

    /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
    while (true) {
      yield timeout(2000);

      let { data } = yield this.get("ajax").request(url);

      this.set("progreso", data.progreso);
      this.set("resultado", data.resultado);
      this.set("detalle", data.detalle);
      this.set("archivo", data.archivo);

      if (data.resultado) {
        this.set("progreso", 100);

        if (this.get("autodescargar")) {
          this.get("descargas").iniciarDesdeURL(data.archivo);
        }

        return data.resultado;
      }
    }
  }),

  actions: {
    crearTarea() {
      this.get("trabajo").perform();
    },
    descargar() {
      let ruta = this.get("archivo");
      window.open(ruta, "Download");
    }
  }
});
