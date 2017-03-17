import Component from 'ember-validated-form/components/validated-form/component';

export default Component.extend({
  cargando: false,

  actions: {
    submit() {
      this.set('submitted', true);
      const model = this.get('model');
      model.validate().then(() => {
        if (model.get('isInvalid')) {
          return;
        }

        this.set('cargando', true);

        if (!this.attrs['on-submit']) {
          console.error("No hay una acción asociada a la propiedad on-submit");
          return;
        }

        let action = this.attrs['on-submit'](model);

        if (!action.then) {
          console.error("Cuidado, la acción enviada a on-submit no retorna una promesa...");
        }

        action.then(() => {
          this.set('cargando', false);
        });

      });
    }
  }

});
