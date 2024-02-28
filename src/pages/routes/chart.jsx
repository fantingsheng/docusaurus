import React, { useRef } from 'react';
import * as d3 from 'd3';

export default function Chart({ data, width, height }) {
  const svgRef = useRef();

  const margin = {
    top: 20,
    right: 0,
    bottom: 15,
    left: 25
  }

  const xScale = d3.scaleLinear()
    .domain(d3.extent(data.map(d => d.distance)))
    .range([margin.left, width - margin.right]);

  const yScale = d3.scaleLinear()
    .domain(d3.extent(data.map(d => d.elevation)))
    .range([height - margin.bottom - 5, margin.top]);

  const line = d3.line().x(d => xScale(d.distance)).y(d => yScale(d.elevation));

  const dLine = line(data);

  useEffect(() => {

  }, [svgRef.current, data]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
}