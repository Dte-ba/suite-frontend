import RavenLogger from "ember-cli-sentry/services/raven";
import Ember from "ember";

export default RavenLogger.extend({
  unhandledPromiseErrorMessage: "",

  captureException(/* error */) {
    this._super(...arguments);
  },

  captureMessage(/* message */) {
    return this._super(...arguments);
  },

  enableGlobalErrorCatching() {
    return this._super(...arguments);
  },

  ignoreError() {
    return this._super();
  },

  callRaven(/* methodName, ...optional */) {
    return this._super(...arguments);
  },

  inicializarContexto(datos) {
    this.callRaven("setUserContext", datos);
  },

  info(mensaje) {
    this.callRaven("captureMessage", mensaje, {
      level: "info"
    });
  },

  registrarAccion(evento) {
    this.callRaven("captureBreadcrumb", evento);
  },

  capturarErroresGlobales() {
    let onerror = error => {
      if (error && error.name === "TransitionAborted") {
        return;
      } else {
        this.callRaven("captureMessage", error);
        throw error;
      }
    };

    Ember.RSVP.on("error", onerror);
  }
});
