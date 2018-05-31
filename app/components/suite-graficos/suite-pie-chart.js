import Ember from "ember";
import d3 from "d3";

export default Ember.Component.extend({
  didInsertElement() {
    var _svg = d3.select(this.$("svg")[0]);

    let width = 200;
    let height = 200;
    let radius = Math.min(width, height) / 2;

    let dataset = this.get("data");

    let g = _svg
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var _arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(radius);

    let label = d3
      .arc()
      .innerRadius(0)
      .outerRadius(radius);

    var _pie = d3
      .pie()
      .value(function(d) {
        return d.count;
      })
      .sort(null);

    var color = d3.scaleOrdinal().range(["#00f", "#33f", "#66f", "#88f"]);

    var _path = g
      .selectAll("path")
      .data(_pie(dataset))
      .enter();

    _path
      .append("path")
      .attr("d", _arc)
      .attr("fill", function(d) {
        return color(d.data.name);
      });

    _path
      .append("text")
      .attr("font-family", "sans-serif")
      .attr("font-size", "14px")
      .attr("fill", "#000")
      .attr("dy", "0.35em")
      .attr("transform", function(d) {
        let posicion = label.centroid(d);
        return `translate(${posicion})`;
      })
      .text(function(d) {
        return d.data.name;
      });

    this.$().transition("fade in");
  }
});
