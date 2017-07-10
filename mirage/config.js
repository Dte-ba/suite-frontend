export default function() {
  this.urlPrefix = "api";
  //this.namespace = '';
  //this.timing = 1400;

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

  /*
  this.get("/escuelas", function(db, request) {
    let escuelas = db.escuelas.all().models;

    return {
      data: escuelas.map(attrs => ({
        type: "escuela",
        id: attrs.id,
        attributes: attrs
      }))
    };
  });
  */

  this.get("/escuelas/:id");
  this.put("/escuelas/:id");
  this.del("/escuelas/:id");
  this.post("/escuelas");
  this.patch("/escuelas/:id");

  this.get("/tipos-de-financiamiento");
  this.get("/tipos-de-financiamiento/:id");

  this.get("/regiones");
  this.get("/regiones/:id");

  this.get("/distritos");
  this.get("/distritos/:id");

  this.get("/localidades");
  this.get("/localidades/:id");
}
