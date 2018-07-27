import Ember from "ember";

export default Ember.Route.extend({
  requiere: "personas.verdetalle",
  breadCrumb: { title: "Detalle de usuario" },
  perfil: Ember.inject.service(),

  afterModel(model) {
    this.evitarQuePuedaVerOtroPerfil(model);
    model.set("filaDatosAdministrativos", [
      {
        titulo: "Sistema/s que utiliza",
        componente: "suite-detalle/aplicaciones"
      },
      {
        titulo: "Grupo en la SUITE",
        componente: "suite-detalle/group"
      },
      {
        titulo: "Región",
        id: "regionComoCadena"
      },
      {
        titulo: "Cargo",
        id: "cargoComoCadena"
      },
      {
        titulo: "Contrato",
        componente: "suite-detalle/contrato"
      },
      {
        titulo: "Expediente",
        id: "expediente"
      },
      {
        titulo: "Fecha de ingreso",
        id: "fechaDeIngreso",
        componente: "suite-detalle/fechaDeIngreso"
      },
      {
        titulo: "Fecha de renuncia",
        id: "fechaDeRenuncia"
      },
      {
        titulo: "Email Laboral",
        id: "emailLaboral"
      },
      {
        titulo: "Estado",
        id: "estadoComoCadena"
      }
    ]);

    model.set("filaDatosPersonales", [
      {
        titulo: "Fecha de nacimiento",
        id: "fechadenacimiento",
        fecha: true
      },
      {
        titulo: "Título",
        id: "titulo"
      },
      {
        titulo: "Perfil",
        id: "experienciaComoCadena"
      },
      {
        titulo: "DNI",
        id: "dni"
      },
      {
        titulo: "CUIT/CUIL",
        id: "cuit"
      },
      {
        titulo: "CBU",
        id: "cbu"
      },
      {
        titulo: "Email personal",
        id: "email"
      },
      {
        titulo: "Dirección",
        id: "direccionCompleta"
      },
      {
        titulo: "Celular",
        id: "telefonoCelular"
      },
      {
        titulo: "Teléfono",
        id: "telefonoAlternativo"
      }
    ]);

    return model;
  },
  evitarQuePuedaVerOtroPerfil(model) {
    if (!this.get("perfil").tienePermiso("perfil.global")) {
      let perfil = this.get("perfil");
      if (model.get("id") !== perfil.miPerfil.id) {
        let m = "No puede ver este perfil porque no es el titular.";
        this.get("notificador").error(m);
        return this.transitionTo("app.escritorio");
      }
    }
  }
});
