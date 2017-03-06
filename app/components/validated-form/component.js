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

        this.attrs['on-submit'](model).then((data) => {
          this.set('cargando', false);
        });

      });
    }
  }

});
