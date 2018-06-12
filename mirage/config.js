export default function() {
  this.urlPrefix = "api";

  this.timing = 200;
  this.logging = false;

  this.get("/eventos");
  this.get("/eventos/:id");
  this.put("/eventos/:id");
  this.del("/eventos/:id");
  this.post("/eventos");
  this.patch("/eventos/:id");

  this.get("/users");
  this.get("/users/:id");
  this.put("/users/:id");
  this.del("/users/:id");
  this.post("/users");
  this.patch("/users/:id");

  this.get("/perfiles");
  this.get("/perfiles/:id");
  this.put("/perfiles/:id");
  this.del("/perfiles/:id");
  this.post("/perfiles");
  this.patch("/perfiles/:id");

  this.get("/estado-de-tareas");
  this.get("/estado-de-tareas/:id");
  this.put("/estado-de-tareas/:id");
  this.del("/estado-de-tareas/:id");
  this.post("/estado-de-tareas");
  this.patch("/estado-de-tareas/:id");

  this.get("/prioridad-de-tareas");
  this.get("/prioridad-de-tareas/:id");
  this.put("/prioridad-de-tareas/:id");
  this.del("/prioridad-de-tareas/:id");
  this.post("/prioridad-de-tareas");
  this.patch("/prioridad-de-tareas/:id");

  this.get("/tareas");
  this.get("/tareas/:id");
  this.put("/tareas/:id");
  this.del("/tareas/:id");
  this.post("/tareas");
  this.patch("/tareas/:id");

  this.get("/escuelas");

  this.get("/categorias-de-eventos");

  this.post("/escuelas/1/conformar", (/*schema, request*/) => {
    return {};
  });

  this.post("/auth", (schema, request) => {
    if (request.requestBody !== '{"username":"demo","password":"demo"}') {
      return "Estás usando una versión con datos de prueba, ingresá con el usuario 'demo' y contraseña 'demo'";
    } else {
      return {
        token: "tokendemo"
      };
    }
  });

  this.get("/escuelas/escuelas_por_programa", {
    data: [
      {
        count: 3830,
        name: "Conectar Igualdad"
      },
      {
        count: 26,
        name: "Responsabilidad Empresarial"
      },
      {
        count: 3799,
        name: "Primaria Digital"
      },
      {
        count: 1002,
        name: "Escuelas del Futuro"
      }
    ]
  });

  this.get("/mi-perfil", (/*schema, request*/) => {
    return {
      data: {
        username: "hugoruscitti",
        apellido: "Ruscitti",
        grupos: [{ nombre: "Coordinador", id: 1 }],
        idPerfil: 1,
        idRegion: 2,
        nombre: "Hugo",
        permisos: {
          "agenda.listar": true,
          "agenda.crear": true,
          "agenda.eliminar": true,
          "tareas.listar": true,
          "escuelas.listar": true,
          "escuelas.crear": true,
          "personas.listar": true,
          "matrix.listar": true,
          "paquetes.listar": true,
          "validaciones.listar": true,
          "perfil.global": true,
          "personas.verinformes": true,
          "personas.crear": true,
          "personas.editar": true,
          "personas.eliminar": true,
          "tareas.eliminar": true
        }
      }
    };
  });

  this.get("/escuelas/:id");
  this.put("/escuelas/:id");
  this.del("/escuelas/:id");
  this.post("/escuelas");
  this.patch("/escuelas/:id");

  this.get("/tipos-de-financiamiento");
  this.get("/tipos-de-financiamiento/:id");

  this.get("/motivos-de-conformacion");
  this.get("/motivos-de-conformacion/:id");

  this.get("/regiones");
  this.get("/regiones/:id");

  this.get("/distritos");
  this.get("/distritos/:id");

  this.get("/localidades");
  this.get("/localidades/:id");

  this.get("/validaciones");
  this.get("/validaciones/:id");

  this.get("/regiones/2", () => {
    return {
      data: {
        type: "regiones",
        id: "2",
        attributes: {
          numero: 2
        }
      }
    };
  });

  this.get("/escuelas/estadistica", () => {
    return {
      data: {
        pisoRoto: 0,
        total: 8232,
        conectarIgualdad: 3792,
        primariaDigital: 3747,
        cerradas: 0,
        pisoFuncionando: 8190,
        conformadas: 328,
        abiertas: 8232,
        pad: 1800,
        responsabilidadEmpresarial: 26,
        escuelasDelFuturo: 0
      }
    };
  });

  this.get("/eventos/agenda", () => {
    return {
      data: {
        eventos: []
      }
    };
  });

  this.get("/tareas/estadistica", () => {
    return {
      data: {
        total: 627,
        enProgreso: 217,
        prioridadAlta: 268,
        pendientes: 230
      }
    };
  });

  this.get("/perfiles/estadistica", () => {
    return {
      data: {
        total: 302,
        enDTE: 60,
        enTerritorio: 242
      }
    };
  });

  this.get("/validaciones/estadistica", () => {
    return {
      data: {
        objetadas: 609,
        pendientes: 18,
        aprobadas: 3710
      }
    };
  });

  this.get("/eventos/estadistica", () => {
    return {
      data: {
        total: 609,
        conActa: 10,
        sinActa: 599
      }
    };
  });

  this.get("/paquetes/estadistica", () => {
    return {
      data: {
        total: 71515,
        enviados: 2024,
        devueltos: 62346,
        objetados: 6527,
        pendientes: 618
      }
    };
  });

  this.get("/informes", () => {
    return {
      data: "DEMO"
    };
  });

  this.get("/perfiles/1/puede-editar-la-accion", () => {
    return {
      data: {
        puedeEditar: true,
        accion_id: 1
      }
    };
  });
}
