import React, { useEffect } from 'react';

export default function GoogleAdsBlock({ height, clientId, slot, format, layout, styles }) {
  const adsLayout = layout || ''
  const adsHeight = height || '10rem'
  const adsClient = clientId || 'ca-pub-1398727179052429'
  const slotName = slot || '7779646697'
  const adsFormat = format || 'fluid'
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])
  return (
    <div className='adsense' style={{ height: adsHeight, width: '100%', margin: '20px 0'}}>
      <ins className="adsbygoogle"
        style={{ ...styles }}
        data-ad-layout={adsLayout}
        data-ad-format={adsFormat}
        data-ad-client={adsClient}
        data-ad-slot={slotName}
      >
      </ins>
    </div>
  );
}
