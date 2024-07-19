import styles from "../_MockupTab/style.module.scss";
import clsx from 'clsx';
import { useConfigContext } from '../../_configProvider';
import { ThemeStyle } from "../../_themes";

export default function StyleButton() {
  const { config, handleConfigChange } = useConfigContext();
  const styleLst = ThemeStyle(config.theme);

  return (
    <>
    {styleLst.map(el => (
      <div className={clsx(styles.pannelBtn, config.style === el.name ? styles.active : '')} onClick={() => handleConfigChange(el.name, "style")}>
        <div className={styles.preview} style={{aspectRatio: '4 / 3'}}>
          <div className={styles.imgWrapper}>
            <img src={el.thumail} width="100%" alt={el.title} />
          </div>
        </div>
        <p className={styles.name}>{el.title}</p>
      </div>
    ))}
    </>
  )
}
