import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default function Chart({ data, width, height }) {
  const svgRef = useRef();
  const svg = d3.select(svgRef.current);

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

  svg
    .append('path')
    .datum(data)
    .attr('class', 'line')
    .attr('d', line)
    .attr('fill', "url(#gradient)")
    .attr('stroke', '#383c93')
    .attr('stroke-width', 1);

  // const dLine = line(data);

  useEffect(() => {

  }, [svgRef.current, data]);

  return (
    <svg ref={svgRef} width={width} height={height}>

      <defs>
        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(117,161,52, 0.3)" />
          <stop offset="60%" stopColor="rgba(117,161,52, 0.2)" />
          <stop offset="100%" stopColor="rgba(117,161,52, 0)" />
        </linearGradient>
      </defs>
    </svg>
  );
}