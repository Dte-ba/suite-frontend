import Ember from "ember";
import QueryParams from "ember-parachute";

export const parametros = new QueryParams({
  perfil: {
    defaultValue: null,
    refresh: true,
    replace: true
  }
});

export default Ember.Controller.extend(parametros.Mixin, {
  reset({ queryParams }, isExiting) {
    if (isExiting) {
      this.resetQueryParams();
    }
  }
});
