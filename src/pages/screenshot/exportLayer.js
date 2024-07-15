import { useEffect, createContext, useRef, useState } from 'react';

import Preview from "./preview";
import styles from "./style.module.scss";

import { useConfigContext } from './_configProvider';

export default function ExportLayer({ coverRef }) {
  const { config } = useConfigContext();

  return (
    <div
      className={styles.exportLayer}
      style={{ zIndex: -1000, width: config.width / 2, height: config.height / 2 }}
    >
      <div
        ref={coverRef}
        id="captureCanvas"
        className={styles.frame}
        style={{ aspectRatio: config.ratio, width: config.width / 2, height: config.height / 2}}
      >
        <Preview transform={config.style} showBtn={false} />
      </div>
    </div>
  )
}