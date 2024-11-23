import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import styles from './style.module.scss';

export const chartData = [
  { distance: 1.2, elevation: 3, coordinations: [] },
  { distance: 1.4, elevation: 3.3, coordinations: [] },
  { distance: 1.6, elevation: 3.5, coordinations: [] },
  { distance: 1.8, elevation: 3.4, coordinations: [] },
  { distance: 2.0, elevation: 3.6, coordinations: [] },
  { distance: 2.3, elevation: 4, coordinations: [] },
  { distance: 2.5, elevation: 3.9, coordinations: [] },
  { distance: 2.8, elevation: 3.8, coordinations: [] },
  { distance: 3.1, elevation: 4.0, coordinations: [] },
  { distance: 3.4, elevation: 4.2, coordinations: [] },
  { distance: 3.7, elevation: 4.4, coordinations: [] },
  { distance: 4.0, elevation: 4.3, coordinations: [] },
  { distance: 4.2, elevation: 3.9, coordinations: [] },
  { distance: 4.5, elevation: 3.6, coordinations: [] }
];

export function ChartXyAxis({ data }) {
  const width = 320;
  const height = 200;

  const margin = {
    top: 20,
    right: 0,
    bottom: 20,
    left: 25
  };

  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const xScale = d3.scaleLinear()
      .domain(d3.extent(data.map(d => d.distance)))
      .range([margin.left, width - margin.right]);

    const yScale = d3.scaleLinear()
      .domain(d3.extent(data.map(d => d.elevation)))
      .range([height - margin.bottom - 5, margin.top]);
    
    const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0).tickFormat(val => val + 'm');
    const yAxis = d3.axisLeft(yScale).ticks(height / 40);

    // 绘制坐标轴
    svg
      .append('g')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(xAxis);
    
    svg
      .append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(yAxis)
      .call(g => g.append("text")
        .attr("x", -margin.left)
        .attr("y", 10)
        .attr("fill", "#6b716a")
        .attr("text-anchor", "start")
        .text("海拔 (m)"));

  }, data);

  return (
    <svg ref={svgRef} width={width} height={height}></svg>
  )
}

export function ChartDrawLine({ data }) {
  const width = 320;
  const height = 200;

  const margin = {
    top: 20,
    right: 0,
    bottom: 20,
    left: 25
  };

  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const xScale = d3.scaleLinear()
      .domain(d3.extent(data.map(d => d.distance)))
      .range([margin.left, width - margin.right]);

    const yScale = d3.scaleLinear()
      .domain(d3.extent(data.map(d => d.elevation)))
      .range([height - margin.bottom - 5, margin.top]);
    
    const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0).tickFormat(val => val + 'm');
    const yAxis = d3.axisLeft(yScale).ticks(height / 40);

    const line = d3.line().x(d => xScale(d.distance)).y(d => yScale(d.elevation));

    // 绘制坐标轴
    svg
      .append('g')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(xAxis);
    
    svg
      .append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(yAxis)
      .call(g => g.append("text")
        .attr("x", -margin.left)
        .attr("y", 10)
        .attr("fill", "#6b716a")
        .attr("text-anchor", "start")
        .text("海拔 (m)"));
        
    // 绘制折线
    svg
      .append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', '#75A134')
      .attr('stroke-width', 1);

  }, data);

  return (
    <svg ref={svgRef} width={width} height={height}></svg>
  )
}

export function ChartDrawArea({ data }) {
  const width = 320;
  const height = 200;

  const margin = {
    top: 20,
    right: 0,
    bottom: 20,
    left: 25
  };

  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const xScale = d3.scaleLinear()
      .domain(d3.extent(data.map(d => d.distance)))
      .range([margin.left, width - margin.right]);

    const yScale = d3.scaleLinear()
      .domain(d3.extent(data.map(d => d.elevation)))
      .range([height - margin.bottom - 5, margin.top]);
    
    const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0).tickFormat(val => val + 'm');
    const yAxis = d3.axisLeft(yScale).ticks(height / 40);

    const line = d3.line().x(d => xScale(d.distance)).y(d => yScale(d.elevation));
    const area = d3.area().x(d => xScale(d.distance)).y0(height - margin.bottom).y1(d => yScale(d.elevation));
    
    // 绘制坐标轴
    svg
      .append('g')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(xAxis);
    
    svg
      .append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(yAxis)
      .call(g => g.append("text")
        .attr("x", -margin.left)
        .attr("y", 10)
        .attr("fill", "#6b716a")
        .attr("text-anchor", "start")
        .text("海拔 (m)"));
        
    // 绘制折线
    svg
      .append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', '#75A134')
      .attr('stroke-width', 1);
    
    // 绘制渐变区域
    svg
      .append('path')
      .datum(data)
      .attr('d', area)
      .attr('fill', 'url(#gradient)');

  }, data);

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
  )
}

export function Chart({ data, width, height }) {
  const svgRef = useRef();

  const [hoverX, setHoverX] = useState(null)
  const [hoverDistance, setHoverDistance] = useState(null)
  const [hoverElevation, setHoverElevation] = useState(null)

  const margin = {
    top: 20,
    right: 0,
    bottom: 20,
    left: 25
  }

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const xScale = d3.scaleLinear()
      .domain(d3.extent(data.map(d => d.distance)))
      .range([margin.left, width - margin.right]);

    const yScale = d3.scaleLinear()
      .domain(d3.extent(data.map(d => d.elevation)))
      .range([height - margin.bottom - 5, margin.top]);

    const line = d3.line().x(d => xScale(d.distance)).y(d => yScale(d.elevation));
    const area = d3.area().x(d => xScale(d.distance)).y0(height - margin.bottom).y1(d => yScale(d.elevation));
    
    const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0).tickFormat(val => val + 'm');
    const yAxis = d3.axisLeft(yScale).ticks(height / 40);

    // 绘制坐标轴
    svg
      .append('g')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(xAxis);
    
    svg
      .append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(yAxis)
      .call(g => g.append("text")
        .attr("x", -margin.left)
        .attr("y", 10)
        .attr("fill", "#6b716a")
        .attr("text-anchor", "start")
        .text("海拔 (m)"));

    // 绘制折线
    svg
      .append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', '#75A134')
      .attr('stroke-width', 1);

    svg
      .append('path')
      .datum(data)
      .attr('d', area)
      .attr('fill', 'url(#gradient)');

  }, data);

  const handleMouseMove = e => {
    const bounds = e.target.getBoundingClientRect()
    const posX = e.clientX ? e.clientX : clamp(e.targetTouches[0].clientX, 58, width + 32) // TODO: measure - 58px from left screen edge, 32px from right
    const x = posX - bounds.left + margin.left

    // 根据鼠标当前所在位置计算横坐标
    const xScale = d3.scaleLinear()
      .domain(d3.extent(data.map(d => d.distance)))
      .range([margin.left, width - margin.right]);
    const distance = xScale.invert(x)
    // 根据当前鼠标所在横坐标的值获得最近的点
    const { elevation, coordinates } = data.reduce((prev, curr) =>
      Math.abs(curr.distance - distance) < Math.abs(prev.distance - distance) ? curr : prev,
    )

    setHoverX(x)
    setHoverDistance(Math.round(distance * 100) / 100)
    setHoverElevation(Math.floor(elevation))
  }

  const handleMouseLeave = () => {
    setHoverX(null)
    setHoverDistance(null)
  }

  function HoverText({ y, children }) {
    const alignToRight = hoverX > width - margin.left - margin.right - 55
    return (
      <text
        x={alignToRight ? -4 : 4}
        y={y}
        textAnchor={alignToRight ? 'end' : 'start'}
        alignmentBaseline="hanging"
        fill="currentColor"
        className={styles.hoverText}
      >
        {children}
      </text>
    )
  }

  return (
    <svg className={styles.chart} ref={svgRef} width={width} height={height}>
      <defs>
        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(117,161,52, 0.3)" />
          <stop offset="60%" stopColor="rgba(117,161,52, 0.2)" />
          <stop offset="100%" stopColor="rgba(117,161,52, 0)" />
        </linearGradient>
      </defs>

      {/* 垂直引导线 */}
      {hoverX && (
        <g transform={`translate(${hoverX}, 0)`}>
          <line y1={margin.top} y2={height - margin.bottom} stroke="currentColor" />
          <HoverText y={margin.top}>Dist: {hoverDistance} km</HoverText>
          <HoverText y={margin.top + 16}>Elev: {hoverElevation} m</HoverText>
        </g>
      )}

      {/* 悬浮效果触发区域 */}
      {width > 0 && height > 0 && (
        <rect
          width={width - margin.left - margin.right}
          height={height - margin.top - margin.bottom}
          fill="transparent"
          x={margin.left}
          y={margin.top}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseLeave}
        />
      )}
    </svg>
  );
}

export default function DemoChart() {
  return (
    <></>
  )
};
