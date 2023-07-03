import React from 'react';
import useToggle from './useToggle';
import debounce from './debounce';
import useMousePosition from './useMousePosition';
import downloadByUrl from './download';
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  useToggle,
  debounce,
  useMousePosition,
  downloadByUrl,
};
export default ReactLiveScope;
