import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('app', function() {
    this.route('ui', function() {
      this.route('tabla');
      this.route('formularios');
      this.route('modales');
      this.route('otros');
      this.route('planilla');
    });

    this.route('usuarios', function() {
      this.route('crear');
      this.route('detalle', {path: ':perfil_id'});
    });
    this.route('agenda', function() {});

    this.route('regiones', function() {
      this.route('mapa');
      this.route('detalle', {path: ':region_id'});
    });
  });

  this.route('tablas', function() {
    this.route('regiones', function() {
      this.route('acciones');
    });
  });
});

export default Router;
