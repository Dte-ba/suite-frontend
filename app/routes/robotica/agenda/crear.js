import Ember from "ember";
import QueryParamsResetRouteMixin from "ember-query-params-reset/mixins/query-params-reset-route";

export default Ember.Route.extend(QueryParamsResetRouteMixin, {
  requiere: "agenda.crear",
  perfil: Ember.inject.service(),

  queryParams: {
    escuela_id: {}
  },

  model(params) {
    let hoy = moment().format("YYYY-MM-DD");
    let ahoraInicio = moment().format("HH:mm:ss");
    let ahoraFin = moment()
      .add(1, "s")
      .format("HH:mm:ss");
    let opciones = {
      fecha: hoy,
      fechaFin: hoy,
      inicio: ahoraInicio,
      fin: ahoraFin,
      cantidadDeAlumnos: 0,
      tallerista: this.get("perfil.miPerfil")
    };

    if (params.escuela_id) {
      return this.store.findRecord("escuela", params.escuela_id).then(data => {
        opciones.escuela = data;
        return this.store.createRecord("eventoDeRobotica", opciones);
      });
    }
    return this.store.createRecord("eventoDeRobotica", opciones);
  },

  afterModel(model) {
    model.set("buscarPersonas", this.get("buscarPersonas"));
    model.set(
      "talleres",
      this.store.query("tallerDeRobotica", { page_size: 3000 })
    );
    model.set(
      "cursos",
      this.store.query("cursoDeRobotica", { page_size: 3000 })
    );
    model.set("areas", this.store.query("areaDeRobotica", { page_size: 3000 }));
  },

  actions: {
    verDetalle(modelo) {
      this.transitionTo("robotica.agenda.detalle", modelo.get("id"));
    },
    willTransition: function() {
      if (this.currentModel.get("isNew")) {
        this.get("currentModel").deleteRecord();
      }
    },

    cancelar() {
      return this.transitionTo("robotica.agenda.index");
    }
  }
});
