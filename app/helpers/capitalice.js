import Ember from "ember";

export function capitalice(params) {
  let str = params[0];
  var firstLetter = str.substr(0, 1);
  return firstLetter.toUpperCase() + str.substr(1);
}

export default Ember.Helper.helper(capitalice);
