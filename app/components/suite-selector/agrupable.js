import Ember from "ember";

export default Ember.Component.extend({
  opciones: Ember.computed("valores.length", function() {
    let valores = this.get("valores");
    let grupoDeOpciones = [];

    if (valores.get("length") > 0) {
      valores.map(e => {
        if (e.get("nombre").indexOf("/") !== -1) {
          // si tiene categoria
          let categoria = e.get("nombre").split("/")[0];
          let nombre = e.get("nombre").split("/")[1];
          e.set("nombreSinCategoria", nombre);

          this.agregarOpcionConCategoria(grupoDeOpciones, categoria, e);
        } else {
          e.set("nombreSinCategoria", e.get("nombre"));
          grupoDeOpciones.push(e);
        }
      });

      return grupoDeOpciones;
    }

    return valores;
  }),

  agregarOpcionConCategoria(grupoDeOpciones, categoria, e) {
    for (let i = 0; i < grupoDeOpciones.length; i++) {
      let itemDelArrayFinal = grupoDeOpciones[i];

      if (itemDelArrayFinal.groupName === categoria) {
        itemDelArrayFinal.options.push(e);
        return;
      }
    }

    grupoDeOpciones.push({ groupName: categoria, options: [e] });
  }
});
