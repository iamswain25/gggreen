import { select, json, geoMercator } from "https://cdn.skypack.dev/d3@7";
import { geoPath } from "https://cdn.skypack.dev/d3-geo@3";
const WIDTH = 1800;
const HEIGHT = 1000;
const projection = geoMercator()
  .center([126.9895, 37.5651])
  .scale(30000)
  .translate([WIDTH / 2, HEIGHT / 2]);
const path = geoPath(projection);
const svg = select("div")
  .append("svg")
  .attr("width", WIDTH)
  .attr("height", HEIGHT);
json("./gg.geojson").then((data) => {
  // Join data and draw svg path
  console.log(data);
  svg
    .selectAll("path")
    .data(data.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("class", "gg");
});
