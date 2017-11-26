import Ember from "ember";

export default Ember.Route.extend({
  requiere: "tareas.listar",

  model() {
    return {
      columnas: [
        {
          atributo: "prioridadDeTarea.nombre",
          titulo: "Prioridad",
          promesa: "prioridadDeTarea"
        },
        {
          atributo: "titulo",
          titulo: "Título",
          ruta: "app.tareas.detalle"
        },
        {
          atributo: "fechaDeAlta",
          titulo: "Fecha de Alta",
          fecha: true
        },
        {
          titulo: "Autor",
          componente: "suite-detalle/autorDeLaTarea"
        },
        {
          atributo: "responsable.nombreCompleto",
          titulo: "Responsable",
          promesa: "responsable"
        },
        {
          titulo: "Descripción",
          componente: "suite-detalle/descripcionDeTarea"
        },
        {
          atributo: "motivoDeTarea.nombre",
          titulo: "Categoría",
          promesa: "motivoDeTarea"
        },
        {
          titulo: "Distrito",
          atributo: "escuela.localidad.distrito.nombre"
        },
        {
          titulo: "Región",
          atributo: "escuela.localidad.distrito.region.numero"
        },
        {
          atributo: "estadoDeTarea.nombre",
          titulo: "Estado",
          promesa: "estadoDeTarea"
        }
      ]
    };
  }
});
