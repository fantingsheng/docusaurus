import React from "react";
import NormalTheme from "./themes/NormalTheme";
import GridTheme from "./themes/GridTheme";
import PaperTheme from "./themes/PaperTheme";
import ShadowTheme from "./themes/ShadowTheme";
import Paper2Theme from "./themes/Paper2Theme";
import NotesTheme from "./themes/NotesTheme";

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
      case 'shadow':
        return <ShadowTheme config={config} />;
      case 'paper2':
        return <Paper2Theme config={config} />;
      case 'notes':
        return <NotesTheme config={config} />;
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