import React from 'react';
export default function SafeDomain({ text, link }) {
  return (
    <div>
      <a className="footer__link-item" target="_blank" href={ link }>{ text }</a>
    </div>
  )
}
