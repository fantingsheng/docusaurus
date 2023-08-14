import React, { useEffect } from 'react';

export default function GoogleAdsBlock({ height, clientId }) {
  const adsHeight = height || '100px'
  const adsClient = clientId || 'ca-pub-1398727179052429'
  const slotName = slotName || '7779646697'
  const format = format || 'fluid'
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])
  return (
    <div className='adsense' style={{ height: adsHeight, width: '100%'}}>
      <ins className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center', height: adsHeight }}
        data-ad-layout='in-article'
        data-ad-format={format}
        data-ad-client={adsClient}
        data-ad-slot={slotName}
      >
      </ins>
    </div>
  );
}
