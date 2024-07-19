import React from "react";

import Browser from "./browser";
import ScreenShot from "./screenShot";

export function ThemeStyle(theme) {
  switch (theme) {
    case 'screenshot':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/screenshot/default.png' },
        { name: 'glass-light', title: 'Glass Light', thumail: '/screenshot/theme/screenshot/glass-light.png' }
      ];
    case 'browser':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/browser/default.png' },
      ];
    default:
      return [];
  }
}

export default function CoverTheme (props) {
  const { theme } = props.config;

	const selectTheme = (theme) => {
		switch (theme) {
			case 'screenshot':
        return <ScreenShot {...props} />;
      case 'browser':
        return <Browser {...props} />
      default:
        return <></>;
		}
	};

  return (
    <>
      {selectTheme(theme)}
    </>
  )
}
