import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      escuelas: this.store.findAll("escuela"),
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
          template: "tablas/regiones/acciones"
        }
      ],
      programas: this.get("store").findAll("programa")
    });
  }
});
