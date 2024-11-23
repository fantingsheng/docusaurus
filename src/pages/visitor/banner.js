import React from 'react';

export default function Banner () {
  return (
    <div className="hero hero--primary" style={{ height: '25rem' }}>
      <div className="container text--center">
        <h1 className="hero__title">VISITOR BADGE</h1>
        <p className="hero__subtitle">一行代码搞定统计</p>
        <div>
          <button className="button button--secondary button--lg">定制你的专属统计链接</button>
        </div>
      </div>
    </div>
  )
}
