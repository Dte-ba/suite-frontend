import Ember from "ember";
import d3 from "d3";

export default Ember.Component.extend({
  didInsertElement() {
    // Setup svg using Bostock's margin convention

    var margin = { top: 20, right: 160, bottom: 35, left: 30 };

    var width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    var svg = d3
      .select(this.$("svg")[0])
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    /* Data in strings like it would be if imported from a csv */

    var data = this.get("data");

    // Transpose the data into layers
    // var dataset = d3.stack()(
    //   ["abiertos", "finalizados"].map(function(taller) {
    //     console.log(taller);
    //     return data.map(function(d) {
    //       console.log("x: " + d.region + " | y: " + +d[taller]);
    //       return { x: d.region, y: +d[taller] };
    //     });
    //   })
    // );

    var stack = d3.stack().keys(["abiertos", "finalizados"]);

    var dataset = stack(data);

    // Set x, y and colors
    var x = d3.scaleOrdinal().domain(
      dataset[0].map(function(d) {
        return d.x;
      })
    );

    var y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(dataset, function(d) {
          return d3.max(d, function(d) {
            return d.y0 + d.y;
          });
        })
      ])
      .range([height, 0]);

    var colors = ["b33040", "#d25c4d", "#f2b447", "#d9d574"];

    // Define and draw axes
    var yAxis = d3.svg
      .axis()
      .scale(y)
      .orient("left")
      .ticks(5)
      .tickSize(-width, 0, 0)
      .tickFormat(function(d) {
        return d;
      });

    var xAxis = d3.svg
      .axis()
      .scale(x)
      .orient("bottom")
      .tickFormat(d3.time.format("%Y"));

    svg
      .append("g")
      .attr("class", "y axis")
      .call(yAxis);

    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    // Create groups for each series, rects for each segment
    var groups = svg
      .selectAll("g.cost")
      .data(dataset)
      .enter()
      .append("g")
      .attr("class", "cost")
      .style("fill", function(d, i) {
        return colors[i];
      });

    var rect = groups.selectAll("rect").data(function(d) {
      return d;
    });

    rect
      .enter()
      .append("rect")
      .attr("x", function(d) {
        return x(d.x);
      })
      .attr("y", function(d) {
        return y(d.y0 + d.y);
      })
      .attr("height", function(d) {
        return y(d.y0) - y(d.y0 + d.y);
      })
      .attr("width", x.rangeBand())
      .on("mouseover", function() {
        tooltip.style("display", null);
      })
      .on("mouseout", function() {
        tooltip.style("display", "none");
      })
      .on("mousemove", function(d) {
        var xPosition = d3.mouse(this)[0] - 15;
        var yPosition = d3.mouse(this)[1] - 25;
        tooltip.attr(
          "transform",
          "translate(" + xPosition + "," + yPosition + ")"
        );
        tooltip.select("text").text(d.y);
      });

    // Draw legend
    var legend = svg
      .selectAll(".legend")
      .data(colors)
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) {
        return "translate(30," + i * 19 + ")";
      });

    legend
      .append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", function(d, i) {
        return colors.slice().reverse()[i];
      });

    legend
      .append("text")
      .attr("x", width + 5)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "start")
      .text(function(d, i) {
        switch (i) {
          case 0:
            return "Anjou pears";
          case 1:
            return "Naval oranges";
          case 2:
            return "McIntosh apples";
          case 3:
            return "Red Delicious apples";
        }
      });

    // Prep the tooltip bits, initial display is hidden
    var tooltip = svg
      .append("g")
      .attr("class", "tooltip")
      .style("display", "none");

    tooltip
      .append("rect")
      .attr("width", 30)
      .attr("height", 20)
      .attr("fill", "white")
      .style("opacity", 0.5);

    tooltip
      .append("text")
      .attr("x", 15)
      .attr("dy", "1.2em")
      .style("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold");
  }
});
