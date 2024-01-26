import React from "react";
import NormalTheme from "./themes/NormalTheme";
import GridTheme from "./themes/GridTheme";
import PaperTheme from "./themes/PaperTheme";

import styles from './style.module.scss';

export default function TextCard ({ config }) {
  const { theme } = config;

	const selectTheme = (theme) => {
		switch (theme) {
			case 'normal':
        return <NormalTheme config={config} />;
			case 'grid':
        return <GridTheme config={config} />;
			case 'paper':
        return <PaperTheme config={config} />;
			default:
        return <NormalTheme config={config} />;
		}
	};

  return (
    <div className={styles.cardWrap}>
      {selectTheme(theme)}
    </div>
  )
}