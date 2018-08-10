import config from "../config/environment";
import Inflector from "ember-inflector";

let initializer = {
  name: "configure-inflector",

  initialize: function() {
    const inflector = Inflector.inflector;

    inflector.irregular("region", "regiones");
    inflector.irregular("distrito", "distritos");
    inflector.irregular("localidad", "localidades");
    inflector.irregular("perfil", "perfiles");
    inflector.irregular("nivel", "niveles");
    inflector.irregular("modalidad", "modalidades");
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
    inflector.irregular("comentario-de-tarea", "comentarios-de-tarea");
    inflector.irregular("categoria-de-evento", "categorias-de-eventos");
    inflector.irregular("motivo-de-conformacion", "motivos-de-conformacion");

    inflector.irregular("estado-de-validacion", "estados-de-validacion");
    inflector.irregular("validacion", "validaciones");
    inflector.irregular("estado-de-paquete", "estados-de-paquete");
    inflector.irregular("paquete", "paquetes");

    inflector.irregular("tarea", "tareas");
    inflector.irregular("group", "groups");

    inflector.irregular("aplicacion", "aplicaciones");

    inflector.irregular("evento-de-robotica", "eventos-de-robotica");
    inflector.irregular("taller-de-robotica", "talleres-de-robotica");
    inflector.irregular("area-de-robotica", "areas-de-robotica");
    inflector.irregular("curso-de-robotica", "cursos-de-robotica");
    inflector.irregular("seccion-de-robotica", "secciones-de-robotica");
  }
};

if (config.environment !== "production") {
  initializer.before = "ember-cli-mirage";
}

export default initializer;
