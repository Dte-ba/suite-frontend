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
      cantidadDeParticipantes: 0,
      responsable: this.get("perfil.miPerfil")
    };

    if (params.escuela_id) {
      return this.store.findRecord("escuela", params.escuela_id).then(data => {
        opciones.escuela = data;
        return this.store.createRecord("evento", opciones);
      });
    }
    return this.store.createRecord("evento", opciones);
  },

  afterModel(model) {
    model.set("buscarPersonas", this.get("buscarPersonas"));
    model.set("categorias", this.store.query("categoriaDeEvento", { page_size: 3000 }));
  },

  actions: {
    verDetalle(modelo) {
      this.transitionTo("app.agenda.detalle", modelo.get("id"));
    },
    willTransition: function() {
      if (this.currentModel.get("isNew")) {
        this.get("currentModel").deleteRecord();
      }
    },

    cancelar() {
      return this.transitionTo("app.agenda.index");
    }
  }
});
