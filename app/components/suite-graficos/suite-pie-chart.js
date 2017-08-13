import Ember from 'ember';
import { select } from 'd3-selection';
import { scaleLinear, scaleBand, scaleOrdinal } from 'd3-scale';
import { svg, arc, pie } from 'd3-shape';

export default Ember.Component.extend({


  data: [
    {label:"one", value:20},
    {label:"two", value:50},
    {label:"three", value:30}
  ],

  didInsertElement() {

    var w = 300,                        //width
        h = 300,                            //height
        r = 100,                            //radius
        color = scaleOrdinal.category20c;     //builtin range of colors

    var svg = select(this.$('svg')[0]);

    svg.attr("width", w)           //set the width and height of our visualization (these will be attributes of the <svg> tag
      .attr("height", h)
      .append('g')
      .attr("transform", "translate(" + r + "," + r + ")")    //move the center of the pie chart from 0, 0 to radius, radius

    var arc = arc().outerRadius(r);              //this will create <path> elements for us using arc data
    var pie = layout.pie()           //this will create arc data for us given a list of values
        .value(function(d) { return d.value; });    //we must tell it out to access the value of each element in our data array
  }
});
