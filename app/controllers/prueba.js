import Ember from 'ember';

export default Ember.Controller.extend({
  data: {
    campos: [{
        nombre: "nombreCompleto",
        etiqueta: "Nombre completo",
        ejemplo: "Juan Perez",
        tipo: "input",
        validaciones: ['novacio', 'masde5letras']
      }
    ],
    textos: {
      guardar: "Crear el registro de la persona"
    }
  }
});
