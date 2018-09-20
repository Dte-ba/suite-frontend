import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",
  initMap() {
    var direccion = this.get("direccion");
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: { lat: -34.617, lng: -58.4458736 }
    });

    var geocoder = new google.maps.Geocoder();

    function geocodeAddress(geocoder, resultsMap, direccion) {
      var address = direccion;
      geocoder.geocode(
        {
          address: address,
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

            /*var marker = */ new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
          } else {
            return "Hubo un problema tratando de encontrar la dirección.";
          }
        }
      );
    }
    geocodeAddress(geocoder, map, direccion);
  },
  didInsertElement() {
    this.initMap();
  }
});
