import Ember from 'ember';
import {validatePresence, validateLength} from 'ember-changeset-validations/validators';

export default Ember.Controller.extend({
  queryParams: ['crearEventoVisible'],
  remodal: Ember.inject.service(),
  eventoActual: {},
  debeMostrarCrearEvento: false,  // true si debe mostrar el modal para crear un evento y false para un modal de edición.

  header: {
    left:   'prev,next today',
		center: 'title',
		right:  'month,agendaWeek,listMonth'
  },

  validaciones: {
    title: [
      validatePresence(true),
      validateLength({min: 2})
    ],
  },

  eventos: Ember.computed('model.eventos.@each', function() {
    return this.get('model.eventos').map((e) => {
      return {
        id: e.get('id'),
        title: e.get('titulo'),
        start: e.get('fechainicio'),
        end: e.get('fechafin'),
        color: e.get('color'),
        allDay: e.get('fechainicio') === e.get('fechafin'),
        borderColor: e.get('borderColor')
      };
    });
  }),

  actions: {

    abrirModalParaCreacion(fechaPropuesta) {
      this.set('debeMostrarCrearEvento', true);
      fechaPropuesta = fechaPropuesta || '2017-02-27';


      this.set('eventoActual', {
        title: "Título propuesto",
        color: 'blue',
        start: fechaPropuesta,
        end: fechaPropuesta
      });

      this.get('remodal').open();
    },

    abrirModalParaEdicion(eventoSeleccionado) {

      //eventoSeleccionado.start = eventoSeleccionado.start.format('Y/M/D');
      //eventoSeleccionado.end = eventoSeleccionado.end.format('Y/M/D');

      this.set('debeMostrarCrearEvento', false);
      this.set('eventoActual', eventoSeleccionado);
      this.get('remodal').open();
    },

    cerrarModal() {
      this.get('remodal').close();
    },

    crearEvento(changeset) {
      let retorno = this.store.createRecord('evento', {
        titulo:       changeset.get('title'),
        fechainicio:  changeset.get('start'),
        fechafin:     changeset.get('end'),
      }).save().then((data) => {
        this.set('model.eventos', this.store.findAll('evento'));
        this.send('cerrarModal');
      });

      return retorno;
    },

    guardarEvento(changeset) {
      let evento = changeset;

      this.store.findRecord('evento', evento.get('id')).then((record) => {

        record.set('titulo', evento.get('title'));
        record.set('fechainicio', evento.get('start'));
        record.set('fechafin', evento.get('end'));

        record.save().then(() => {
          // TODO: se dispara la búsqueda completa para actualizar la vista.
          this.set('model.eventos', this.store.findAll('evento'));
          this.send('cerrarModal');
        });

      });

    },

    dayClicked: function(date /*, jsEvent, view*/) {
      this.send('abrirModalParaCreacion', date.format());
    },

    clicked(eventoSeleccionado /*, jsEvent, view*/) {
      this.send('abrirModalParaEdicion', eventoSeleccionado);
    },

    /*
     * Se invoca cuando el usuario cambia de fecha.
     * En este punto deberíamos volver a solicitar la lista
     * de eventos.
     */
    viewRender(/* view , element */) {
      //console.log(view.intervalStart);
    }
  }
});
