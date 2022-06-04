import { useEffect, useRef } from "react";
import * as d3 from "d3";
function AreaChart({ daysArray }) {
  const chartWidth = 525;
  const chartHeight = 180;
  const padding = 20;
  const xPadding = -5;
  const svg = useRef();

  useEffect(() => {
    const xAxis = d3
      .scalePoint()
      .domain(daysArray.map((d) => d.value1))
      .range([0 + xPadding, chartWidth - padding]);

    const yAxis = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(daysArray, function (d) {
          return d.value2;
        }),
      ])
      .range([chartHeight - padding, 0 + 50]);

    const area = d3
      .area()
      .x((d) => xAxis(d.value1))
      .y(yAxis(0))
      .y1((d) => yAxis(d.value2-7))
      .curve(d3.curveMonotoneX);

    d3.select(svg.current)
      .select("path")
      .attr("d", () => area(daysArray))
      .attr("fill", "rgb(120, 110, 210 , .2)")
      .attr("stroke", "rgb(120, 110, 210)");

    d3.select(svg.current)
      .append("g")
      .attr("transform", `translate(${padding},0)`)
      .attr("id", "yaxis");
  }, [daysArray]);

  return (
    <svg   id="chart" ref={svg} viewBox="0 0 500 150">
      <path d="" fill="none" stroke="white" strokeWidth="2" />
    </svg>
  );
}

export default AreaChart;
