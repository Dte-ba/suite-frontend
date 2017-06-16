import Ember from "ember";
import config from "./config/environment";

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("login");
  this.route("app", function() {
    this.route("ui", function() {
      this.route("tabla");
      this.route("formularios");
      this.route("modales");
      this.route("otros");
      this.route("planilla");
      this.route("upload");
    });

    this.route("personas", function() {
      this.route("crear");
      this.route("detalle", { path: "detalle/:perfil_id" });
      this.route("edicion", { path: "edicion/:perfil_id" });
    });

    this.route("agenda", function() {});

    this.route("regiones", function() {
      this.route("mapa");
      this.route("detalle", { path: "detalle/:region_id" });
    });

    this.route("escritorio", function() {});

    this.route('distritos', function() {
      this.route('detalle', { path: "detalle/:distrito_id" });
    });
    this.route('escuelas', function() {});
  });

  this.route("tablas", function() {
    this.route("regiones", function() {
      this.route("acciones");
    });
  });
});

export default Router;
