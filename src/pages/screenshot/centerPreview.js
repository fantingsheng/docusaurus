import { useEffect, createContext, useRef, useState } from 'react';

import Preview from "./preview";
import styles from "./style.module.scss";

import { useConfigContext } from './_configProvider';

export default function CenterPreview({ coverRef }) {
  const { config } = useConfigContext();

  return (
    <div className={styles.safeArea}>
      <div
        id="previewFrame"
        className={styles.previewFrame}
        style={{ aspectRatio: config.ratio }}
      >
        <Preview
          transform={config.style}
          showBtn={true}
        />
      </div>
    </div>
  )
}