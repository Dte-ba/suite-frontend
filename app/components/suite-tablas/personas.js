import Ember from "ember";

export default Ember.Component.extend({
  columnas: [
    {
      atributo: "nombreCompleto",
      titulo: "Apellido y nombre",
      ruta: "app.personas.detalle"
    },
    {
      atributo: "region.numero",
      titulo: "Región"
    },
    {
      atributo: "cargo.nombre",
      titulo: "Cargo"
    },
    {
      atributo: "cuit",
      titulo: "CUIL/CUIT"
    },
    {
      atributo: "emailLaboral",
      titulo: "Email Laboral"
    },
    {
      titulo: "Grupo",
      componente: "suite-detalle/group"
    },
    {
      titulo: "Contrato",
      componente: "suite-detalle/contrato"
    },
    {
      atributo: "fechaDeIngreso",
      titulo: "Fecha de Ingreso",
      fecha: true
    }
  ],
  actions: {
    alIngresarFiltro(valor) {
      this.set("pagina", 1);
      this.set("filtro", valor);
    }
  }
});
