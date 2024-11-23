import React from 'react';
import ReactJson from 'react-json-view';

export default function ReactJsonView (props) {
  return (
    <ReactJson displayObjectSize={false} {...props} />
  )
}