import React, { useEffect } from 'react';

export default function Statistics() {
  useEffect(() => {
    const script = require('busuanzi.pure.js');
    script.fetch();
  }, [])
  
  return (
    <div>
      <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_uv"></span>人<span id="busuanzi_value_site_pv"></span>次</span>
      </span>
    </div>
  )
}
