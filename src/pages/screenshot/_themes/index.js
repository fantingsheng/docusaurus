import React from "react";

import Browser from "./browser";
import ScreenShot from "./screenShot";
import Iphone15 from "./iphone15";
import IpadPro13 from "./ipadPro13";
import MacbookPro16 from "./macbookPro16";
import ImacRetina from "./iMacRetina";
import AppleWatchUltra from "./appleWatchUltra";
import Pixel7Pro from "./pixel7Pro";
import SurfaceBook from "./surfaceBook";
import StudioDisplay from "./studioDisplay";
import AppleWatchSeries8 from "./appleWatchSeries8";
import IpadAir from "./ipadAir";

export function ThemeStyle(theme) {
  switch (theme) {
    case 'screenshot':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/screenshot/default.png' },
        { name: 'glass-light', title: 'Glass Light', thumail: '/screenshot/theme/screenshot/glass-light.png' },
        { name: 'card', title: 'Card', thumail: '/screenshot/theme/screenshot/card.png' },
        { name: 'stack', title: 'Stack',thumail: '/screenshot/theme/screenshot/stack.png' },
        { name: 'stack2', title: 'Stack 2',thumail: '/screenshot/theme/screenshot/stack-2.png' }
      ];
    case 'browser':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/browser/style_default.png' },
        { name: 'dark', title: 'Dark', thumail: '/screenshot/theme/browser/style_dark.png' }
      ];
    case 'iphone15':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/iphone15/style_black.png' },
      ];
    case 'ipadPro13':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/ipadPro13/style_default.png' },
      ];
    case 'macbookPro16':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/macbookPro16/style_default.png' }
      ]
    case 'iMacRetina':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/iMacRetina/style_default.png' }
      ]
    case 'appleWatchUltra':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/appleWatchUltra/style_default.png' }
      ]
    case 'pixel7Pro':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/pixel7Pro/style_default.png' }
      ]
    case 'surfaceBook':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/surfaceBook/style_default.png' }
      ]
    case 'studioDisplay':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/studioDisplay/style_default.png' }
      ]
    case 'appleWatchSeries8':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/appleWatchSeries8/style_default.png'},
        { name: 'silver', title: 'Silver', thumail: '/screenshot/theme/appleWatchSeries8/style_silver.png'},
        { name: 'starlight', title: 'Starlight', thumail: '/screenshot/theme/appleWatchSeries8/style_starlight.png'}
      ]
    case 'ipadAir':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/ipadAir/style_default.png'},
      ]
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
      case 'macbookPro16':
        return <MacbookPro16 {...props} />
      case 'iMacRetina':
        return <ImacRetina {...props} />
      case 'appleWatchUltra':
        return <AppleWatchUltra {...props} />
      case 'pixel7Pro':
        return <Pixel7Pro {...props} />
      case 'surfaceBook':
        return <SurfaceBook {...props} />
      case 'studioDisplay':
        return <StudioDisplay {...props} />
      case 'appleWatchSeries8':
        return <AppleWatchSeries8 {...props} />
      case 'ipadAir':
        return <IpadAir {...props} />
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
