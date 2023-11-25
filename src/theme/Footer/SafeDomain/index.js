import React from 'react';
export default function SafeDomain({ text, link }) {
  return (
    <div className='safeDomain'>
      <a className="footer__link-item" target="_blank" href={ link }>{ text }</a>&nbsp;&nbsp;|&nbsp;&nbsp;
      <a className="footer__link-item" href="/blog/rss.xml" target='_blank'>RSS</a>
    </div>
  )
}
