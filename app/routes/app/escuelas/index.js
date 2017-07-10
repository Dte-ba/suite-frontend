import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Route.extend({
  queryParams: {
    pagina: { replace: true, refreshModel: true },
    filtro: { replace: true }
  },
  obtenerEscuelas: task(function*(query) {
    let data = yield this.store.query("escuela", query);
    let meta = data.get("meta");
    return { data, meta };
  }).drop(),

  model() {
    return Ember.RSVP.hash({
      tareaEscuelas: this.get("obtenerEscuelas"),
      //escuelas: this.store.findAll("escuela"),
      // localidades: this.store.findAll("localidad"),
      columnas: [
        {
          propertyName: "nombre",
          title: "Nombre"
        },
        {
          propertyName: "cue",
          title: "CUE"
        },
        {
          propertyName: "localidad.distrito.region.numero",
          title: "Región"
        },
        {
          propertyName: "localidad.nombre",
          title: "Localidad"
        },
        // {
        //   propertyName: "localidad.distrito.nombre",
        //   title: "Distrito"
        // },
        {
          propertyName: "nivel.nombre",
          title: "Nivel"
        },
        {
          propertyName: "tipoDeFinanciamiento.nombre",
          title: "Financiamiento"
        },
        // {
        //   propertyName: "direccion",
        //   title: "Dirección"
        // },
        // {
        //   propertyName: "tipoDeGestion.nombre",
        //   title: "Tipo de Gestión"
        // },
        // {
        //   propertyName: "area.nombre",
        //   title: "Área"
        // },
        {
          propertyName: "programasComoCadena",
          title: "Programas"
        },
        {
          title: "Acciones",
          template: "tablas/escuelas/acciones"
        }
      ]
      //programas: this.get("store").findAll("programa")
    });
  }
});
