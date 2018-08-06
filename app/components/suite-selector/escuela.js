import Ember from "ember";
import { task, timeout } from "ember-concurrency";

export default Ember.Component.extend({
  store: Ember.inject.service(),
  perfilService: Ember.inject.service("perfil"),

  buscarEscuelas: task(function*(term) {
    yield timeout(200);

    let soloSuRegion = !this.get("perfilService").tienePermiso("perfil.global");

    var query = { search: term, conformada: false };

    if (soloSuRegion) {
      let region = this.get("perfilService").obtenerRegion();
      query.localidad__distrito__region__numero = region.get("numero");
    }

    let contexto = this.get("contexto");
    if (contexto === "paquetes") {
      query.programa = "Conectar Igualdad";
    }
    if (contexto === "robotica") {
      query.nivel__nombre = "Primaria";
    }
    return this.get("store").query("escuela", query);
  }),

  actions: {
    cuandoSeleccionaEscuela(perfil) {
      this.set("valor", perfil);
      this.get("cuandoSelecciona")(perfil);
      let contexto = this.get("contexto");
      if (contexto === "paquetes") {
        Ember.$("#error-de-escuela").html("");
        let valor = this.get("valor");
        let piso = valor.get("piso.id");
        let serie = valor.get("piso.serie");
        let llave = valor.get("piso.llave");
        var errorDeEscuela = false;
        let editarPiso =
          "<a href='/#/app/pisos/editar/" + piso + "'>Editar piso</a>";

        // Si no tiene llave el servidor, no puede pedir paquetes.
        if (!llave) {
          Ember.$("#error-de-escuela").append(
            "<li>La escuela seleccionada no tiene llave del servidor cargada.</li>"
          );
          errorDeEscuela = true;
        }

        // Si no tiene cargado el número de serie del servidor, no puede pedir paquetes.
        if (!serie) {
          Ember.$("#error-de-escuela").append(
            "<li>La escuela seleccionada no tiene cargado el número de serie del servidor.</li>"
          );
          errorDeEscuela = true;
        }

        // Si hay errores con el piso, no puede pedir paquetes.
        if (errorDeEscuela === true) {
          Ember.$("#error-de-escuela").append(
            " Por favor, complete los datos faltantes del piso para poder solicitar paquetes de provisión. " +
              editarPiso
          );
          Ember.$("#error-de-escuela").show();
          Ember.$("#solicitar-paquetes").addClass("disabled");
        }
      }
    }
  }
});
