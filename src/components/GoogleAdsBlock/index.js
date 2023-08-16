import React, { useEffect } from 'react';

export default function GoogleAdsBlock({ clientId, slot, format, layout, layoutKey, styles }) {
  const adsLayout = layout || ''
  const adsClient = clientId || 'ca-pub-1398727179052429'
  const slotName = slot || '7779646697'
  const adsFormat = format || 'fluid'
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])
  return (
    <div className='adsense' style={{ height: 'auto', width: '100%', margin: '20px 0'}}>
      <ins className="adsbygoogle"
        style={{ ...styles }}
        data-ad-layout={adsLayout}
        data-ad-layout-key={layoutKey}
        data-ad-format={adsFormat}
        data-ad-client={adsClient}
        data-ad-slot={slotName}
        data-full-width-responsive="true"
      >
      </ins>
    </div>
  );
}
