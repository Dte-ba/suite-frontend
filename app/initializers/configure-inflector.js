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
    inflector.irregular("tipo-de-financiamiento", "tipos-de-financiamiento");
    inflector.irregular("tipo-de-gestion", "tipos-de-gestion");
    inflector.irregular("cargo", "cargos");
    inflector.irregular("contrato", "contratos");
    inflector.irregular("experiencia", "experiencias");
    inflector.irregular("piso", "pisos");
    inflector.irregular("cargo-escolar", "cargos-escolares");
    inflector.irregular("motivo-de-tarea", "motivos-de-tarea");
    inflector.irregular("estado-de-tarea", "estados-de-tarea");
    inflector.irregular("prioridad-de-tarea", "prioridades-de-tarea");

    inflector.irregular("tarea", "tareas");
  }
};

if (config.environment !== "production") {
  initializer.before = "ember-cli-mirage";
}

export default initializer;
