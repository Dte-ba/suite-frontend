export default function(server) {
  server.loadFixtures("eventos");
  server.loadFixtures("users");
  server.loadFixtures("perfiles");

  var tipoDeFinanciamiento = server.create("tipoDeFinanciamiento", {
    nombre: "Estatal"
  });

  var region = server.create("region", {
    numero: 1
  });

  var distrito = server.create("distrito", {
    nombre: "Berisso",
    region: region
  });

  var localidad = server.create("localidad", {
    nombre: "Los Talas",
    distrito: distrito
  });

  /*var escuela =*/ server.create("escuela", {
    CUE: "123123",
    nombre: "Demo",
    localidad: localidad,
    tipoDeFinanciamiento: tipoDeFinanciamiento
  });
}
