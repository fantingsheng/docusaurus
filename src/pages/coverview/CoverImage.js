import React from "react";
import BasicTheme from "./themes/BasicTheme";
import BackgroundTheme from "./themes/BackgroundTheme";
import StylishTheme from "./themes/StylishTheme";
import OutlineTheme from './themes/OutlineTheme';
import ModernTheme from './themes/ModernTheme';
import PreviewTheme from './themes/PreviewTheme';
import MobileTheme from './themes/MobileTheme';
import PictureTheme from './themes/PictureTheme';

import styles from './style.module.scss';

export default function CoverImage ({ config }) {
  const { theme } = config;

	const selectTheme = (theme) => {
		switch (theme) {
			case 'basic':
        return <BasicTheme config={config} />;
			case 'modern':
        return <ModernTheme config={config} />;
			case 'outline':
        return <OutlineTheme config={config} />;
      case 'background':
        return <BackgroundTheme config={config} />;
			case 'preview':
        return <PreviewTheme config={config} />;
			case 'stylish':
        return <StylishTheme config={config} />;
			case 'mobile':
        return <MobileTheme config={config} />;
      case 'picture':
        return <PictureTheme config={config} />;
			default:
        return <BasicTheme config={config} />;
		}
	};

  return (
    <div className={styles.coverWrap}>
      {selectTheme(theme)}
    </div>
  )
}