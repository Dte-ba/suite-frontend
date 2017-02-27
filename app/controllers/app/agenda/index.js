import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['crearEventoVisible'],
  remodal: Ember.inject.service(),
  eventoActual: null,
  debeMostrarCrearEvento: false,  // true si debe mostrar el modal para crear un evento y false para un modal de edición.

  header: {
    left:   'prev,next today',
		center: 'title',
		right:  'month,agendaWeek,listMonth'

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
      this.set('debeMostrarCrearEvento', false);
      this.set('eventoActual', eventoSeleccionado);
      this.get('remodal').open();
    },

    cerrarModal() {
      this.get('remodal').close();
    },

    crearEvento() {
      this.store.createRecord('evento', {
        titulo:       this.get('eventoActual.title'),
        fechainicio:  this.get('eventoActual.start'),
        fechafin:     this.get('eventoActual.end'),
      }).save().then(() => {
        this.set('model.eventos', this.store.findAll('evento'));
      });

      this.send('cerrarModal');
    },

    guardarEvento() {
      let evento = this.get('eventoActual');

      this.store.findRecord('evento', evento.id).then((record) => {

        record.set('titulo', evento.title);
        record.set('fechainicio', this.get('eventoActual.start'));
        record.set('fechafin', this.get('eventoActual.end'));

        record.save().then(() => {
          // TODO: se dispara la búsqueda completa para actualizar la vista.
          this.set('model.eventos', this.store.findAll('evento'));
        });

      });

      this.send('cerrarModal');
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
    viewRender(view /*, element*/) {
      console.log(view.intervalStart);
    }
  }
});
