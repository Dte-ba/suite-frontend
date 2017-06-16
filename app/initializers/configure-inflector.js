import Ember from "ember";
import config from "../config/environment";

let initializer = {
  name: "configure-inflector",

  initialize: function() {
    const inflector = Ember.Inflector.inflector;

    inflector.irregular("region", "regiones");
    inflector.irregular("distrito", "distritos");
    inflector.irregular("localidad", "localidades");
    inflector.irregular("perfil", "perfiles");
    inflector.irregular("nivel", "niveles");
    inflector.irregular("programa", "programas");
    inflector.irregular("area", "areas");
    inflector.irregular("escuela", "escuelas");
  }
};

if (config.environment !== "production") {
  initializer.before = "ember-cli-mirage";
}

export default initializer;
