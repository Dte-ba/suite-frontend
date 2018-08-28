import Ember from "ember";
import d3 from "d3";

export default Ember.Component.extend({
  didInsertElement() {
    var data = this.get("data");
    var sort = this.get("sort");
    var labelY = this.get("labelY");
    var itemCount = data.length;

    if (sort === "asc") {
      data = data.sort(function(a, b) {
        return d3.ascending(a.count, b.count);
      });
    } else if (sort === "desc") {
      data = data.sort(function(a, b) {
        return d3.descending(a.count, b.count);
      });
    } else if (sort === "alfa-desc") {
      data = data.sort(function(a, b) {
        return d3.descending(a.name, b.name);
      });
    }

    var svgHeight = 25 * itemCount;

    // set the dimensions and margins of the graph
    var margin = { top: 20, right: 20, bottom: 50, left: 300 },
      width = 700 - margin.left - margin.right,
      height = svgHeight - margin.top - margin.bottom;

    // set the ranges
    var y = d3
      .scaleBand()
      .range([height, 0])
      .padding(0.1);

    var x = d3.scaleLinear().range([0, width]);

    // append the svg object to the body of the page
    // append a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3
      .select(this.$("svg")[0])
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "toolTip");

    // format the data
    data.forEach(function(d) {
      d.porcentaje = +d.porcentaje;
    });

    // Scale the range of the data in the domains
    x.domain([
      0,
      100
      // d3.max(data, function(d) {
      //   return d.count;
      // })
    ]);
    y.domain(
      data.map(function(d) {
        return d.name;
      })
    );
    //y.domain([0, d3.max(data, function(d) { return d.count; })]);

    // append the rectangles for the bar chart
    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      //.attr("x", function(d) { return x(d.count); })
      .attr("width", function(d) {
        return x(d.porcentaje);
      })
      .attr("y", function(d) {
        return y(d.name);
      })
      .attr("height", y.bandwidth())
      .attr("fill", "#e60052")
      .on("mousemove", function(d) {
        tooltip
          .style("left", d3.event.pageX - 50 + "px")
          .style("top", d3.event.pageY - 70 + "px")
          .style("display", "inline-block")
          .html(
            d.name +
              "<br> <b>" +
              d.count +
              "</b> Museos <br> <b>" +
              d.porcentaje +
              "%</b>"
          );
      })
      .on("mouseout", function() {
        tooltip.style("display", "none");
      });

    // add the x Axis
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("font-family", "Lato")
      .attr("font-size", "16px");

    // Referencia Eje X
    svg
      .append("text")
      .attr(
        "transform",
        "translate(" + width / 2 + " ," + (height + margin.top + 20) + ")"
      )
      .style("text-anchor", "middle")
      .attr("font-family", "Lato")
      .attr("font-size", "16px")
      .attr("fill", "#000")
      .text("%");

    // add the y Axis
    svg
      .append("g")
      .call(d3.axisLeft(y))
      .selectAll("text")
      .attr("font-family", "Lato")
      .attr("font-size", "16px");

    // Referencia Eje Y
    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - height / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .attr("font-family", "Lato")
      .attr("font-size", "16px")
      .attr("fill", "#000")
      .text(labelY);

    // Info sobre barras
    svg
      .append("g")
      .attr("id", "count")
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("fill", "#000")
      .attr("font-family", "Lato")
      .attr("font-size", "16px")
      .attr("height", y.bandwidth())
      .attr("y", function(d) {
        return y(d.name) + 13;
      })
      .attr("x", function(d) {
        if (x(d.porcentaje) != 0) {
          return x(d.porcentaje) + 5;
        }
      })
      .attr("height", y.bandwidth())
      .text(function(d) {
        if (x(d.porcentaje) != 0) {
          return d.porcentaje + "%";
        }
      });
  }
});
