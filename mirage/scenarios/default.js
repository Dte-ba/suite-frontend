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
    id: 1,
    numero: 1
  });

  server.create("region", {
    id: 2,
    numero: 2
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

  let escuela_1 = server.create("escuela", {
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
    tipoDeFinanciamiento: tipoDeFinanciamiento,
    conformada: false
  });

  let perfil = server.create("perfil", {
    nombre: "Usuario",
    apellido: "Ejemplo"
  });

  server.create("perfil", {
    nombre: "Demo",
    apellido: "Demo",
    dni: "30428500"
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

  let estado_abierto = server.create("estadoDeTarea", {
    nombre: "Abierto"
  });

  let prioridad_media = server.create("prioridadDeTarea", {
    id: 1,
    nombre: "Media"
  });

  server.create("tarea", {
    titulo: "Escuela del Futuro",
    fechaDeAlta: "2018-06-01",
    descripcion: "Reunión los directivos del establecimientos para pautar metodología de trabajo con el kit kano.Y determinar como se realizará la planificación situada con el RIED.",

    estadoDeTarea: estado_abierto,
    escuela: escuela_1,
    prioridadDeTarea: prioridad_media,
    autor: perfil,
    responsable: perfil
  });
}
