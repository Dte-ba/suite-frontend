import Ember from "ember";
import ENV from "suite-frontend/config/environment";

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      escuelasPorPrograma: this.get("ajax").request(`${ENV.API_URL}/api/escuelas/escuelas_por_programa`)
    });
  }
});
