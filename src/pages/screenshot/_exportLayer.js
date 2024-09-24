import Preview from "./_preview";
import styles from "./style.module.scss";

import { useConfigContext } from './_configProvider';

export default function ExportLayer({ coverRef }) {
  const { config } = useConfigContext();

  return (
    <div
      className={styles.exportLayer}
      style={{ zIndex: -1000, width: config.width, height: config.height }}
    >
      <div
        ref={coverRef}
        id="captureCanvas"
        className={styles.frame}
        style={{ aspectRatio: config.ratio, width: config.width, height: config.height }}
      >
        <Preview transform={config.transform} showBtn={false} />
      </div>
    </div>
  )
}
