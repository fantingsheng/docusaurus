import { useEffect, createContext, useRef, useState } from 'react';

import Preview from "./_preview";
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
          transform={config.transform}
          showBtn={true}
        />
      </div>
    </div>
  )
}