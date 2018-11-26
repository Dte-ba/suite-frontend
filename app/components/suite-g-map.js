import Ember from "ember";
import { task } from "ember-concurrency";

export default Ember.Component.extend({
  tagName: "",

  initMap(direccion) {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: { lat: -34.617, lng: -58.4458736 }
    });

    var geocoder = new google.maps.Geocoder();

    function geocodeAddress(geocoder, resultsMap, direccion) {
      return new Ember.RSVP.Promise((success /*, reject*/) => {
        geocoder.geocode(
          {
            address: direccion,
            componentRestrictions: {
              country: "Argentina"
            }
          },
          function(results, status) {
            if (status === "OK") {
              resultsMap.setCenter(results[0].geometry.location);
              // Acá deberíamos poder obtener latitud y longitud, y guardar esos datos
              // en la escuela, para que en las próximas consultas busque directamente
              // por coordenadas y no haga falta usar la API de geocode.
              // El problema es si la dirección cargada es errónea, y se guardan coordenadas
              // que no son correctas.
              // var lat = results[0].geometry.location.lat();
              // var lng = results[0].geometry.location.lng();

              var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
              });

              success(marker);
            } else {
              success("Hubo un problema tratando de encontrar la dirección.");
            }
          }
        );
      });
    }
    return geocodeAddress(geocoder, map, direccion);
  },

  didInsertElement() {
    this.get("tareaObtenerDireccion").perform();
  },

  tareaObtenerDireccion: task(function*() {
    let escuela = yield this.get("promesa");

    yield this.initMap(escuela.get("direccion"));
  })
});
