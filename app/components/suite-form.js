import Ember from 'ember';

export default Ember.Component.extend({
  data: null,

  didRender() {
    if (this.get('data.campos')) {
      let fields = this._obtenerCamposDeFormulario();
      this.$('.ui.form').form(fields);
    }
  },

  _obtenerCamposDeFormulario() {
    let campos = this.get('data').campos;
    let fields = {};

    // Convirte la lista de campos en la definición de formulario que espera Semantic-ui
    campos.forEach((campo) => {
      fields = {
        name: {
          identifier: campo.nombre,
          rules: this._obtenerListaDeValidaciones(campo.validaciones),
        }
      };
    });

    return {fields: fields};
  },


  /**
   * Convierte una lista de atajos de validaciones en una estructura de validaciones completa.
   *
   * Semantic-ui espera que las validaciones de los formularios
   * tengan una estructura completa, indicando el tipo de validación
   * y un texto de error.
   *
   * Pero a nosotros nos resulta más sencillo representar las validaciones
   * con un atajo tipo 'novacio' o 'minimo5letras'.
   *
   * Esta función se encarga de hacer esa conversión, pasa de un string
   * sencillo tipo 'novacio' (lo que llamamos atajo de validación) a una
   * estructura completa tipo:
   *
   *      {
   *         type: 'empty',
   *         prompt: 'Tiene que ingresar algún texto'
   *      }
   *
   * Si la función no encuentra la forma de llevar el atajo a la estructura
   * se emite un warning en consola y no se interrumpen las validaciones.
   *
   */
  _obtenerListaDeValidaciones(atajoDeValidaciones) {
    let diccionarioDeValidaciones = {
      novacio: {
        type: 'empty',
        prompt: 'Tiene que ingresar algún texto.'
      },
      masde5letras: {
        type   : 'minLength[5]',
        prompt : 'Tiene que especificar al menos 5 letras.'
      }
    };

    // Busca errores o inconsistencias en la lista de atajos:
    atajoDeValidaciones.map((atajo) => {
      if (!(atajo in diccionarioDeValidaciones)) {
        let atajosValidos = Object.keys(diccionarioDeValidaciones);
        console.warn(`Cuidado, el atajo '${atajo}' es inválido, no existe un atajo con ese nombre. Los únicos atajos que existen son: ${atajosValidos}`);
      }
    });

    // convirte el atajo de validación a una estructura completa:
    return atajoDeValidaciones.map((atajo) => {
      return diccionarioDeValidaciones[atajo];
    });
  }

});
