import Ember from "ember";
import QueryParams from "ember-parachute";

let mesPasado = moment()
  .subtract(1, "months")
  .format("YYYY-MM-DD");
let finDelMesPasado = moment()
  .subtract(1, "months")
  .endOf("month")
  .format("YYYY-MM-DD");

export const parametros = new QueryParams({
  perfil: { defaultValue: null, refresh: true, replace: true },
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
      this.set("perfil", datos.get("perfil.id"));

      Ember.run.later(() => {
        this.transitionToRoute("app.personas.informes.exportar", datos.get("perfil.id"), datos.get("desde"), datos.get("hasta"));
      });
    }
  }
});
