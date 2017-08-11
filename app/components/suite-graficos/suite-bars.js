import Ember from 'ember';
import { select } from 'd3-selection';
import { scaleLinear, scaleBand, scaleOrdinal } from 'd3-scale';

export default Ember.Component.extend({

  validaciones: [
    { name: 'Objetadas', count: 300 },
    { name: 'Pendientes', count: 750 },
    { name: 'Aprobadas', count: 2500 }
  ],

  didInsertElement() {
    let color = scaleOrdinal(["#ff0000", "#00ff00", "#0000ff"]);

    let validacionCounts = this.get('validaciones').map(validacion => validacion.count);
    let yScale = scaleLinear()
      .domain([0, Math.max(...validacionCounts) ])
      .range([0, 130]);

    let xScale = scaleBand()
      .domain(this.get('validaciones').map(validacion => validacion.name))
      .range([ 0, 300])
      .paddingInner(0.12);

    let svg = select(this.$('svg')[0]);

    svg.selectAll('rect').data(this.get('validaciones'))
      .enter()
      .append('rect')
      .attr('width', xScale.bandwidth())
      .attr('height', validacion => yScale(validacion.count))
      .attr('x', validacion => xScale(validacion.name))
      .attr('y', validacion => 150 - yScale(validacion.count))
      .attr("fill", color((validacion, index) => index))

    let text = svg.selectAll('text')
      .data(this.get('validaciones'))
      .enter()
      .append('text')
      .attr("x", validacion => xScale(validacion.name))
      .attr("y", function(d) { return 15; })
      .text( validacion => validacion.name)
      .attr("font-family", "sans-serif")
      .attr("font-size", "14px")
      .attr("fill", "#666");

  }
});
