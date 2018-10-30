import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Component.extend({
  store: Ember.inject.service(),
  perfil: Ember.inject.service(),

  cuandoCambiaRegion: Ember.observer("region", function() {
    this.get("obtenerOpcionesParaSeleccionarPersonas").perform();
  }),

  obtenerOpcionesParaSeleccionarPersonas: task(function*() {
    let opciones = [];

    let tiene_permiso_global = this.get("perfil").tienePermiso("perfil.global");
    let id = this.get("perfil").get("data").idPerfil;
    let region = this.get("region.numero");

    /*
        El selector tiene que distinguir 2 casos:


          1 - Si es administrador (permiso global), tiene que ver
              poder seleccionar "todas las personas" solamente.

          2 - Si es Facilitador o coordinador, tiene que ver la opción
              "mis acciones", la opción "mi región" o el nombre de cualquier
              otra persona de su propia región.
    */

    if (!region) {
      opciones.pushObject(
        Ember.Object.create({
          texto: "* Todas las personas",
          id: null
        })
      );
    } else {
      // Si es administrador, le permite ver toda la región con un
      // nombre descriptivo.
      if (tiene_permiso_global) {
        opciones.pushObject(
          Ember.Object.create({
            texto: "* Toda la región",
            id: null
          })
        );
      } else {
        // Si no es administrador, le muestra dos opciones
        // de filtro personalizadas antes de enumerar a todas las personas
        // de la región.

        opciones.pushObject(
          Ember.Object.create({
            texto: "* Mis paquetes",
            id: id
          })
        );

        opciones.pushObject(
          Ember.Object.create({
            texto: "* Paquetes de mi equipo",
            id: null
          })
        );
      }

      let data = yield this.get("store").query("perfil", {
        page_size: 500,
        region__numero: region
      });

      data.map(e => {
        opciones.pushObject({
          texto: e.get("nombreCompleto"),
          id: e.get("id")
        });
      });
    }

    this.set("opciones", opciones);
    this.set("valor", opciones[0]);

    return opciones;
  }).drop(),

  didInsertElement() {
    this.get("obtenerOpcionesParaSeleccionarPersonas").perform();
  }
});
