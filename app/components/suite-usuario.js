import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['item', 'suite-usuario'],

  didInsertElement() {
    this.$().popup({
        popup: '.popup',
        on: 'click',
        closeable: true,
    });
  },

  actions: {
    abrirPreferencias() {
      alert("Esta funcionalidad aún no está implementada.");
      this.$().popup('hide');
    },
    cerrarLaSesion() {
      alert("Esta funcionalidad aún no está implementada.");
      this.$().popup('hide');
    }
  }
});
