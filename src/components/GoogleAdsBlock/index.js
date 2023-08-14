import React, { useEffect } from 'react';

export default function GoogleAdsBlock() {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])
  return (
    <div className='adsense' style={{ height: '100px', width: '100%'}}>
      <ins className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-1398727179052429"
        data-ad-slot="7779646697"></ins>
    </div>
  );
}