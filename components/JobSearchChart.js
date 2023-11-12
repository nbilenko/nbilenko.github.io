import { useD3 } from "hooks/useD3";
import React from "react";
import * as d3 from "d3";

import { data, keys } from "../constants/jobsearch";

const keyz = "index";
export function JobSearchChart() {
  const ref = useD3(
    (svg) => {
      // Specify the chart’s dimensions.
      const width = 928;
      const height = keys.length * 40;
      const marginTop = 20;
      const marginRight = 10;
      const marginBottom = 20;
      const marginLeft = 50;

      // Create an horizontal (*x*) scale for each key.
      const x = new Map(
        Array.from(keys, (key) => [
          key,
          d3.scalePoint(
            ...[new Set(data.map((d) => d[key]).filter((d) => !!d || d === 0))],
            [marginLeft, width - marginRight]
          ),
        ])
      );

      // Create the vertical (*y*) scale.
      const y = d3.scalePoint(keys, [marginTop, height - marginBottom]);

      // Create the color scale.
      const color = d3.scaleSequential(x.get(keyz).domain(), (t) =>
        d3.interpolateGreens(t)
      );

      // Append the lines.
      const line = d3
        .line()
        .defined(([, value]) => value != null)
        .x(([key, value]) => x.get(key)(value))
        .y(([key]) => y(key))
        .curve(d3.curveCatmullRom.alpha(0.5));

      svg
        .append("g")
        .attr("fill", "none")
        .attr("stroke-width", 4)
        .attr("stroke-opacity", 0.5)
        .selectAll("path")
        .data(data.slice().sort((a, b) => d3.ascending(a[keyz], b[keyz])))
        .join("path")
        .attr("stroke", (d) => color(d[keyz]))
        .attr("d", (d) => line(d3.cross(keys, [d], (key, d) => [key, d[key]])))
        .append("title")
        .text((d) => d.name);

      var imgs = svg.selectAll("image").data(data);
      imgs
        .enter()
        .append("svg:image")
        .attr("y", y(keyz) + 10)
        .attr("width", 40)
        .attr("height", 40)
        .attr("x", (d) => x.get(keyz)(d[keyz]))
        .attr("xlink:href", (d) => `jobsearch/${d.image}`);

      // Append the axis for each key.
      svg
        .append("g")
        .selectAll("g")
        .data(keys)
        .join("g")
        .attr("transform", (d) => `translate(0,${y(d)})`)
        .each(function (d) {
          d3.select(this).call(d3.axisBottom(x.get(d)).tickValues([]));
        })
        .call((g) =>
          g
            .append("text")
            .attr("x", marginLeft)
            .attr("y", -6)
            .attr("text-anchor", "start")
            .attr("fill", "currentColor")
            .text((d) => d)
        )
        .call((g) =>
          g
            .selectAll("text")
            .clone(true)
            .lower()
            .attr("fill", "none")
            .attr("stroke-width", 5)
            .attr("stroke-linejoin", "round")
            .attr("stroke", "white")
        );
    },

    [data.length]
  );

  return (
    <svg
      ref={ref}
      style={{
        height: 500,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
}
