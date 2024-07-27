import React from "react";

import Browser from "./browser";
import ScreenShot from "./screenShot";
import Iphone15 from "./iphone15";
import IpadPro13 from "./ipadPro13";

export function ThemeStyle(theme) {
  switch (theme) {
    case 'screenshot':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/screenshot/default.png' },
        { name: 'glass-light', title: 'Glass Light', thumail: '/screenshot/theme/screenshot/glass-light.png' },
        { name: 'card', title: 'Card', thumail: '/screenshot/theme/screenshot/card.png' },
        { name: 'stack', title: 'Stack',thumail: '/screenshot/theme/screenshot/stack.png' }
      ];
    case 'browser':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/browser/style_default.png' },
      ];
    case 'iphone15':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/iphone15/style_black.png' },
      ];
    case 'ipadPro13':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/ipadPro13/style_default.png' },
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
      case 'iphone15':
        return <Iphone15 {...props} />
      case 'ipadPro13':
        return <IpadPro13 {...props} />
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
