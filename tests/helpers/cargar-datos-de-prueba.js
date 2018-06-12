import Ember from "ember";

export default Ember.Test.registerAsyncHelper("cargarDatosDePrueba", function() {
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

  server.create("categoriaDeEvento", {
    nombre: "Sin categoría"
  });

  let escuela_1 = server.create("escuela", {
    CUE: "123123",
    nombre: "Escuela N° 10 - General José de San Martín",
    direccion: "Av. Montevideo y El Ombú",
    telefono: "462-0411",
    localidad: localidad,
    tipoDeFinanciamiento: tipoDeFinanciamiento
  });

  let perfil = server.create("perfil", {
    nombre: "Usuario",
    apellido: "Ejemplo"
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
});
