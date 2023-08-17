import React, { useEffect } from 'react';

export default function GoogleAdsBlock({ model }) {

  const adsenseBuilder = () => {
    switch(model) {
      case "inFluid":
        return (
          <ins className="adsbygoogle"
            style={{display: 'block' }}
            data-ad-format="fluid"
            data-ad-layout-key="-fb+5w+4e-db+86"
            data-ad-client="ca-pub-1398727179052429"
            data-ad-slot="5860948418">
          </ins>
        );
      case "inArticle":
        return (
          <ins className="adsbygoogle"
            style={{ display: 'block', textAlign: 'center'}}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-1398727179052429"
            data-ad-slot="7779646697">
          </ins>
        );
      case "multiStyle":
        return (
          <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-format="autorelaxed"
            data-ad-client="ca-pub-1398727179052429"
            data-ad-slot="5871969971">
          </ins>
        )
      case "pureShow":
        return (
          <ins className="adsbygoogle"
            style={{ display: 'block', height: '100px', width: '100%' }}
            data-ad-client="ca-pub-1398727179052429"
            data-ad-slot="3879505103"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        )
      default:
        return (
          <></>
        )
    }
  };

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])

  return (
    <div className='adsense' style={{ height: 'auto', width: '100%', margin: '20px 0'}}>
      { model && adsenseBuilder() }
    </div>
  );
}
