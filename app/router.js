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
    });

    this.route("personas", function() {
      this.route("crear");
      this.route("detalle", { path: "detalle/:perfil_id" });
      this.route("edicion", { path: "edicion/:perfil_id" });
    });

    this.route("agenda", function() {
      this.route("crear");
      this.route("editar", { path: "editar/:id" });
      this.route("lista");
      this.route('detalle', { path: "detalle/:id" });
    });

    this.route("escritorio", function() {});

    this.route("distritos", function() {
      this.route("detalle", { path: "detalle/:distrito_id" });
    });
    this.route("escuelas", function() {
      this.route("detalle", { path: "detalle/:escuela_id" });
      this.route("mapa");
      this.route("edicion", { path: "edicion/:escuela_id" });
      this.route('conformar', { path: "conformar/:escuela_id" });
    });
    this.route("mi-perfil");
    this.route('tareas', function() {
      this.route('detalle', { path: "detalle/:tarea_id" });
    });
    this.route('validaciones', function() {
      this.route('detalle', { path: "edicion/:escuela_id" });
    });
    this.route('programas', function() {
      this.route('detalle', { path: 'detalle/:programa_id'});
    });
    this.route('paquetes', function() {});
  });

  this.route("tablas", function() {
    this.route("regiones", function() {
      this.route("acciones");
    });
  });
  this.route("logout");
});

export default Router;
