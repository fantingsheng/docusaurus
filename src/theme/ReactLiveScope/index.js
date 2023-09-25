import React from 'react';
import useToggle from './useToggle';
import debounce from './debounce';
import useMousePosition from './useMousePosition';
import downloadByUrl from './download';
import useWindowSize from './useWindowSize';
import useCopyToClipboard from './useCopyToClipboard';
import useAsync from './useAsync';
import useGeolocation from './useGeolocation';
import useEventListener from './useEventListener'
import useForm from './useForm';
import useDoubleClick from './useDoubleClick';
import useClickInside from './useClickInside';
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  useToggle,
  debounce,
  useMousePosition,
  downloadByUrl,
  useWindowSize,
  useCopyToClipboard,
  useAsync,
  useGeolocation,
  useEventListener,
  useForm,
  useDoubleClick,
  useClickInside
};
export default ReactLiveScope;
