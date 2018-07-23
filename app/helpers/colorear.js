import Ember from "ember";

export function colorear(params /*, hash*/) {
  let cadena = params[0].replace("[ERROR]", '<span class="red">[ERROR]</span>');
  cadena = cadena.replace("[OK]", '<span class="green">[OK]</span>');
  cadena = cadena.replace("[NOTA]", '<span class="blue">[NOTA]</span>');

  return Ember.String.htmlSafe(`${cadena}`);
}

export default Ember.Helper.helper(colorear);
