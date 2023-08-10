import React from 'react';
import useToggle from './useToggle';
import debounce from './debounce';
import useMousePosition from './useMousePosition';
import downloadByUrl from './download';
import useWindowSize from './useWindowSize';
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  useToggle,
  debounce,
  useMousePosition,
  downloadByUrl,
  useWindowSize
};
export default ReactLiveScope;
