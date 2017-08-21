import Ember from "ember";

export default Ember.Component.extend({
  perfil: Ember.inject.service(),
  tagName: "",
  debeMostrar: false,

  didInsertElement() {
    let permiso = this.get("permiso");

    if (!permiso) {
      Ember.assert("Falta especificar el permiso");
    } else {
      let estado = this.get("perfil").tienePermiso(permiso);

      if (estado === undefined) {
        //console.warn(`El permiso "${permiso}" no existe`);
      } else {
        this.set("debeMostrar", estado);
      }
    }
  }
});
