import DS from 'ember-data';
import Ember from "ember";

export default DS.Model.extend({
  escuela: DS.belongsTo('escuela'),
  fechaPedido: DS.attr('string'),
  ne: DS.attr('string'),
  idHardware: DS.attr('string'),
  marcaDeArranque: DS.attr('string'),
  comentario: DS.attr('string'),
  carpetaPaquete: DS.attr('string'),
  fechaEnvio: DS.attr('string'),
  zipPaquete: DS.attr('string'),
  estado: DS.belongsTo('estado-de-paquete'),
  fechaDevolucion: DS.attr('string'),
  leido: DS.attr('boolean'),

  idhardware_ma: Ember.computed("idHardware", "marcaDeArranque", function() {
    let idhardware = this.get("idHardware");
    let ma = this.get("marcaDeArranque");

    return `${idhardware} (${ma})`;
  }),
});
