export default function(server) {
  server.loadFixtures("users");
  server.loadFixtures("perfiles");

  var tipoDeFinanciamiento = server.create("tipoDeFinanciamiento", {
    nombre: "Estatal"
  });

  /* Otros tipos de financiamiento para probar dropdown. */
  server.create("tipoDeFinanciamiento", {
    nombre: "Privado"
  });

  server.create("tipoDeFinanciamiento", {
    nombre: "Especial"
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

  /* Algunas localidades adicionales, no se usan. Solo se agregan
     para probar los combos de localidades. */
  server.create("localidad", {
    nombre: "Berisso",
    distrito: distrito
  });

  server.create("escuela", {
    CUE: "123123",
    nombre: "Escuela N° 10 - General José de San Martín",
    direccion: "Av. Montevideo y El Ombú",
    telefono: "462-0411",
    localidad: localidad,
    tipoDeFinanciamiento: tipoDeFinanciamiento
  });

  server.create("escuela", {
    CUE: "203030",
    nombre: "Escuela N° 3 - Don José de San Martín",
    direccion: "French 103",
    telefono: "462-0411",
    localidad: localidad,
    tipoDeFinanciamiento: tipoDeFinanciamiento
  });

  server.create("perfil", {
    nombre: "Usuario",
    apellido: "Ejemplo"
  });

  server.create("perfil", {
    nombre: "Demo",
    apellido: "Demo"
  });

  server.create("categoriaDeEvento", {
    nombre: "Capacitación/Para docentes"
  });

  server.create("categoriaDeEvento", {
    nombre: "Capacitación/Para alumnos"
  });

  server.create("categoriaDeEvento", {
    nombre: "Sin categoría"
  });

  server.create("motivoDeConformacion", {
    nombre: "Comparten Piso"
  });
}
