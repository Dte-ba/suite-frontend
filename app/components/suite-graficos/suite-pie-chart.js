import Ember from "ember";
import { select } from "d3-selection";
import { scaleOrdinal } from "d3-scale";
import { arc, pie } from "d3-shape";

export default Ember.Component.extend({
  didInsertElement() {
    var _svg = select(this.$("svg")[0]);

    let width = 200;
    let height = 200;
    let radius = Math.min(width, height) / 2;

    let dataset = this.get("data");

    let g = _svg
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var _arc = arc().innerRadius(0).outerRadius(radius);

    // let label = arc().outerRadius(radius - 40).innerRadius(radius - 40);

    var _pie = pie()
      .value(function(d) {
        return d.count;
      })
      .sort(null);

    var color = scaleOrdinal().range(["#29c65d", "#ffce55", "#ff6285"]);

    var _path = g.selectAll("path").data(_pie(dataset)).enter();

    _path.append("path").attr("d", _arc).attr("fill", function(d) {
      return color(d.data.label);
    });

    // _path
    //   .append("text")
    //   .attr("dy", "0.35em")
    //   .attr("transform", function(d) {
    //     let posicion = label.centroid(d);
    //     return `translate(${posicion})`;
    //   })
    //   .text(function(d) {
    //     return d.data.label;
    //   });

    this.$().transition("fade in");
  }
});
