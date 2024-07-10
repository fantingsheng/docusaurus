import React from "react";
import styles from './style.module.scss';

export default function CoverTheme ({ config }) {
  const { theme } = config;

	const selectTheme = (theme) => {
		switch (theme) {
			case 'normal':
        return <img className={styles.uploadImg} src={config.picture} />;
      default:
        return <img className={styles.uploadImg} src={config.picture} />;
		}
	};

  return (
    <>
      {selectTheme(theme)}
    </>
  )
}
