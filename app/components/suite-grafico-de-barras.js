import Ember from "ember";
import { select } from "d3-selection";
import { scaleLinear, scaleBand } from "d3-scale";

export default Ember.Component.extend({
  datos: [
    { etiqueta: "demo", cantidad: 40 },
    { etiqueta: "otro", cantidad: 30 },
    { etiqueta: "más", cantidad: 130 },
    { etiqueta: "noventa", cantidad: 90 }
  ],

  didInsertElement() {
    let svg = select(this.$("svg")[0]);
    let cantidades = this.get("datos").map(e => e.cantidad);

    let yScale = scaleLinear()
      .domain([0, Math.max(...cantidades)])
      .range([0, 100]);

    let xScale = scaleBand()
      .domain(this.get('datos').map(e => e.etiqueta))
      .range([0, 100])
      .paddingInner(0.12);

    let colorScale = scaleLinear()
      .domain([0, Math.max(...cantidades)])
      .range(['red', 'blue']);

    svg
      .selectAll("rect")
      .data(this.get("datos"))
      .enter()
      .append("rect")
      .attr('fill', data => {
        return colorScale(data.cantidad);
      })
      .attr("x", (dato) => {
        return `${xScale(dato.etiqueta)}%`;
      })
      .attr("width", `${xScale.bandwidth()}%`)
      .attr("height", (dato) => {
        return `${yScale(dato.cantidad)}%`;
      })
      .attr('y', (dato) => {
        return `${100 - yScale(dato.cantidad)}%`;
      });
  }
});
