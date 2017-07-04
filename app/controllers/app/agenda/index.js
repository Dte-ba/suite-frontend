import Ember from "ember";

export default Ember.Controller.extend({
  header: {
    left: "prev,next today",
    center: "title",
    //right: "month,agendaWeek,listMonth"
    right: "month,basicWeek,agendaDay"
  },

  eventos: Ember.computed("model.eventos.@each", function() {
    return this.get("model.eventos").map(e => {
      return {
        id: e.get("id"),
        title: e.get("titulo"),
        start: e.get("fechainicio"),
        end: e.get("fechafin"),
        color: e.get("color"),
        allDay: e.get("todoElDia"),
        borderColor: e.get("borderColor")
      };
    });
  }),

  actions: {
    dayClicked: function(/* date, jsEvent, view*/) {},

    /*
     * Se invoca cuando el usuario cambia de fecha.
     * En este punto deberíamos volver a solicitar la lista
     * de eventos.
     */
    viewRender(/* view , element */) {
      //console.log(view.intervalStart);
    },

    eventRender(evento, element) {
      element.addClass("evento-con-acta");

      element.html(`
        <b>${evento.title}</b>

        <p>
          Nombre Autor
        </p>

        <p>
          <a href="/" class="color-gris"><i class="ui file icon"></i></a>
        </p>

        `);
    }
  }
});
