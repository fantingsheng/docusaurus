import React from 'react';
import clsx from 'clsx';
export default function FooterLayout({style, links, logo, copyright, safedomain, socialLink }) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
            {/* {statistics} */}
            { safedomain }
            { socialLink }
          </div>
        )}
      </div>
    </footer>
  );
}
