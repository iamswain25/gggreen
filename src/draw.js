import { select, json, geoMercator } from "https://cdn.skypack.dev/d3@7";
import { geoPath } from "https://cdn.skypack.dev/d3-geo@3";
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const projection = geoMercator()
  .center([127.1895, 37.5651])
  .scale(HEIGHT * 30)
  .translate([WIDTH / 2, HEIGHT / 2]);
const path = geoPath(projection);
const svg = select("#map")
  .append("svg")
  .attr("width", WIDTH)
  .attr("height", HEIGHT);
json("./data/gg_sg.geojson").then((data) => {
  // Join data and draw svg path
  console.log(data);
  svg
    .selectAll("path")
    .data(data.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("class", "gg");
  svg
    .selectAll("place-label")
    .data(data.features)
    .enter()
    .append("text")
    .attr("class", "place-label")
    .attr("transform", function (d) {
      console.log(d.geometry.coordinates);
      return "translate(" + path.centroid(d) + ")";
    })
    .attr("dy", ".5em")
    .attr("dx", "-2em")
    .text(function (d) {
      return d.properties.SIG_KOR_NM;
    });
});
