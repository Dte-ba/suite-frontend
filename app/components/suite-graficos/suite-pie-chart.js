import Ember from "ember";
import d3 from "d3";

export default Ember.Component.extend({
  didInsertElement() {
    var dataset = this.get("data");
    var tipo = this.get("tipo");
    var leyenda = this.get("leyenda");
    var titulo = this.get("titulo");

    console.log(dataset);

    dataset = dataset.sort(function(a, b) {
      return d3.descending(a.porcentaje, b.porcentaje);
    });
    var width = 700,
      height = 300,
      radius = Math.min(width, height) / 2;

    var tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "toolTip");

    var color = d3
      .scaleOrdinal()
      .range([
        "#3366cc",
        "#dc3912",
        "#ff9900",
        "#109618",
        "#990099",
        "#0099c6",
        "#dd4477",
        "#66aa00",
        "#b82e2e",
        "#316395",
        "#994499",
        "#22aa99",
        "#aaaa11",
        "#6633cc",
        "#e67300",
        "#8b0707",
        "#651067",
        "#329262",
        "#5574a6",
        "#3b3eac"
      ]);

    var pie = d3
      .pie()
      .value(function(d) {
        return d.porcentaje;
      })
      .sort(function(a, b) {
        return a.porcentaje - b.porcentaje;
      });

    var piedata = pie(dataset);

    var arc = d3.arc();

    if (tipo === "donut") {
      arc
        .innerRadius(radius - 80)
        .outerRadius(radius - 40)
        .padAngle(0.02)
        .padRadius(100)
        .cornerRadius(4);
    } else {
      arc.innerRadius(0).outerRadius(radius - 50);
    }

    var svg = d3
      .select(this.$("svg")[0])
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 4 + "," + height / 2 + ")");

    var path = svg
      .selectAll("path")
      .data(piedata)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", function(d) {
        return color(d.data.name);
      })
      .on("mousemove", function(d) {
        tooltip
          .style("left", d3.event.pageX - 50 + "px")
          .style("top", d3.event.pageY - 70 + "px")
          .style("display", "inline-block")
          .html(
            d.data.name +
              "<br> <b>" +
              d.data.count +
              "</b> Talleres <br> <b>" +
              d.data.porcentaje +
              "%</b>"
          );
      })
      .on("mouseout", function(d) {
        tooltip.style("display", "none");
      });

    svg
      .selectAll("text")
      .data(piedata)
      .enter()
      .append("text")
      .style("text-anchor", "middle")
      .style("alignment-baseline", "middle")
      .each(function(d) {
        var centroid = arc.centroid(d);
        d3.select(this)
          .attr("x", centroid[0])
          .attr("y", centroid[1])
          .style("font-family", "Lato")
          .style("fill", "#fff")
          // .attr("dy", "0.33em")
          .text(function(d) {
            if (d.data.porcentaje != 0) {
              return d.data.porcentaje + "%";
            }
          });
      });

    if (leyenda === "false") {
    } else {
      var referencias = svg
        .append("g")
        .attr("id", "referencias")
        .attr("width", width)
        .attr("height", height)
        .attr("transform", "translate(-20, -95)");

      referencias
        .selectAll("rect")
        .data(piedata)
        .enter()
        .append("rect")
        .attr("width", 12)
        .attr("height", 8)
        .attr("fill", function(d) {
          return color(d.data.name);
        })
        .attr("x", 150)
        .attr("y", function(d, i) {
          return i * 20;
        });

      referencias
        .selectAll("text")
        .data(piedata)
        .enter()
        .append("text")
        .style("fill", "#444")
        .style("font-family", "Lato")
        .text(function(d) {
          var texto = d.data.name;
          if (leyenda === "full") {
            texto =
              texto + " - " + d.data.porcentaje + "% (" + d.data.count + ")";
          }
          return texto;
        })
        .attr("x", 170)
        .attr("y", function(d, i) {
          return i * 20 + 10;
        });
    }

    var title = svg
      .append("g")
      .attr("id", "titulo")
      .attr("width", width)
      .attr("height", height)
      .attr("transform", "translate(0, -100)");
    title
      .append("text")
      .attr("fill", "#333")
      .text(titulo)
      .style("text-anchor", "middle")
      .style("font-family", "Lato")
      .style("font-size", "16px")
      .attr("fill", "#000")
      .attr("x", 0)
      .attr("y", -20);

    this.$().transition("fade in");
  }
});
