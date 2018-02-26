import Ember from "ember";
import QueryParams from "ember-parachute";

let mesPasado = moment()
  .subtract(1, "months")
  .startOf("month")
  .format("YYYY-MM-DD");
let finDelMesPasado = moment()
  .subtract(1, "months")
  .endOf("month")
  .format("YYYY-MM-DD");

export const parametros = new QueryParams({
  region: { defaultValue: null, refresh: true, replace: true },
  desde: { defaultValue: mesPasado, refresh: true, replace: true },
  hasta: { defaultValue: finDelMesPasado, refresh: true, replace: true }
});

export default Ember.Controller.extend(parametros.Mixin, {
  reset({ queryParams }, isExiting) {
    if (isExiting) {
      this.resetQueryParams();
    }
  },

  actions: {
    iniciarExportacion(datos) {
      // Preservará los parámetros dentro de esta ruta que se abandona.
      this.set("desde", datos.get("desde"));
      this.set("hasta", datos.get("hasta"));
      this.set("region", datos.get("region.numero"));

      Ember.run.later(() => {
        this.transitionToRoute("app.personas.informesPorRegion.exportar", datos.get("region.numero"), datos.get("desde"), datos.get("hasta"));
      });
    }
  }
});
