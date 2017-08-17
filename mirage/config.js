export default function() {
  this.urlPrefix = "api";
  //this.namespace = '';
  this.timing = 1000;

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

  this.get(
    "/mi-perfil",
    (/*schema, request*/) => {
      return {
        data: {
          username: "hugoruscitti",
          apellido: "Ruscitti",
          grupos: [{ nombre: "coordinador", id: 1 }],
          idPerfil: 2,
          permisosComoLista: [
            {
              titulo: "Can delete tipo de financiamiento",
              identificador: "tipodefinanciamiento.delete_tipodefinanciamiento",
              aplicacion: "escuelas",
              modulo: "tipodefinanciamiento",
              nombre: "delete_tipodefinanciamiento"
            },
            {
              titulo: "Can add tipo de gestion",
              identificador: "tipodegestion.add_tipodegestion",
              aplicacion: "escuelas",
              modulo: "tipodegestion",
              nombre: "add_tipodegestion"
            },
            {
              titulo: "Can change tipo de gestion",
              identificador: "tipodegestion.change_tipodegestion",
              aplicacion: "escuelas",
              modulo: "tipodegestion",
              nombre: "change_tipodegestion"
            }
          ],
          nombre: "Hugo",
          permisos: {
            "tipodegestion.add_tipodegestion": true,
            "tipodefinanciamiento.delete_tipodefinanciamiento": true,
            "tipodegestion.change_tipodegestion": true
          }
        }
      };
    }
  );

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

  this.get("/escuelas/estadistica", () => {
    return {
      data: {}
    }
  });

  this.get("/tareas/estadistica", () => {
    return {
      data: {}
    }
  });

  this.get("/validaciones/estadistica", () => {
    return {
      data: { objetadas: 609, pendientes: 18, aprobadas: 3710 }
    };
  });
}
