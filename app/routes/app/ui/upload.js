import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.Object.create({
      url_imagen: "hola?",
    });
  },

  actions: {
    uploadAPhoto(lista_de_archivos) {
      let re = new RegExp('image/*');

      if (re.test(lista_de_archivos[0].type)) {
        //let controller = this.controllerFor('application');
        this.set('model.url_imagen', lista_de_archivos[0].name);

        let reader = new FileReader();
        console.log(lista_de_archivos[0].name);

        reader.onloadend = () => {
          console.log(this.currentModel);
          this.currentModel.set('url_imagen', reader.result);
          //controller.set('photoPreviewUrl', reader.result);
        };

        reader.onprogress = function(data) {
          if (data.lengthComputable) {
            var progress = parseInt( ((data.loaded / data.total) * 100), 10 );
            console.log(progress);
          }
        };

        reader.readAsDataURL(lista_de_archivos[0]);
      } else {
        alert(`File must be an image. You tried to upload: ${lista_de_archivos[0].type}`);
      }
    }
  }
});
