import Ember from 'ember';

export default Ember.Controller.extend({
  data: {
    campos: [{
        nombre: "nombreCompleto",
        etiqueta: "Nombre completo",
        ejemplo: "Juan Perez",
        tipo: "input",
        validaciones: ['novacio', 'masde5letras']
      },
      {
        nombre: "region",
        etiqueta: "Región",
        ejemplo: "Región 1",
        tipo: "dropdown",
        validaciones: ['novacio'],
        opciones: ['Región 1', 'Región 2', 'Región 3', 'otro ejemplo']
      }
    ],
    textos: {
      guardar: "Crear el registro de la persona"
    }
  }
});
