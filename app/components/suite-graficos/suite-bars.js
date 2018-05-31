import Ember from "ember";
import d3 from "d3";

export default Ember.Component.extend({
  didInsertElement() {
    console.log(this.get("data"));
    let color = d3.scaleOrdinal(["#d4145a", "#d4145a", "#d4145a"]);

    let validacionCounts = this.get("data").map(validacion => validacion.count);

    let dataCount = this.get("data").length;
    let xScale = d3
      .scaleLinear()
      .domain([0, Math.max(...validacionCounts)])
      .range([0.5, 400]);

    let yScale = d3
      .scaleBand()
      .domain(this.get("data").map(validacion => validacion.name))
      .range([0, 250])
      .paddingInner(0);

    let svg = d3.select(this.$("svg")[0]);

    svg
      .selectAll("rect")
      .data(this.get("data"))
      .enter()
      .append("rect")
      .attr("width", validacion => xScale(validacion.count))
      // .attr("height", yScale.bandwidth())
      .attr("height", 8)
      .attr("y", validacion => yScale(validacion.name) + 35)
      .attr("x", validacion => 15)
      .attr("fill", color((validacion, index) => index));

    let text = svg
      .selectAll("text")
      .data(this.get("data"))
      .enter()
      .append("text")
      .attr("y", validacion => yScale(validacion.name) + 30)
      .attr("x", function(d) {
        return 15;
      })
      .text(validacion => validacion.name + " (" + validacion.count + ")")
      .attr("font-family", "sans-serif")
      .attr("font-size", "14px")
      .attr("fill", "#666");

    svg.attr("height", 100 * dataCount);
    svg.attr("width", "100%");
  }
});
