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
import Iphone14 from "./iphone14";
import IphoneSe from "./iphoneSe";
import HuaweiP40ProPlus from "./huaweiP40ProPlus";
import SamsungGalaxyWatch4 from "./samsungGalaxyWatch4";
import IMacPro from "./iMacPro";
import MinimalPhone from "./minimalPhone";
import Iphone16 from "./iphone16";
import WallPaper from "./wallPaper";

export function ThemeStyle(theme) {
  switch (theme) {
    case 'screenshot':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/screenshot/default.png' },
        { name: 'glass-light', title: 'Glass Light', thumail: '/screenshot/theme/screenshot/glass-light.png' },
        { name: 'border', title: 'Border', thumail: '/screenshot/theme/screenshot/border.png' },
        { name: 'card', title: 'Card', thumail: '/screenshot/theme/screenshot/card.png' },
        { name: 'stack', title: 'Stack',thumail: '/screenshot/theme/screenshot/stack.png' },
        { name: 'stack2', title: 'Stack 2',thumail: '/screenshot/theme/screenshot/stack-2.png' }
      ];
    case 'browser':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/browser/style_default.png' },
        { name: 'dark', title: 'Dark', thumail: '/screenshot/theme/browser/style_dark.png' }
      ];
    case 'iphone16':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/iphone16/style_default.png' },
        { name: 'white', title: 'White', thumail: '/screenshot/theme/iphone16/style_white.png' },
        { name: 'ultramarine', title: 'Ultramarine', thumail: '/screenshot/theme/iphone16/style_ultramarine.png' },
        { name: 'pink', title: 'Pink', thumail: '/screenshot/theme/iphone16/style_pink.png' },
        { name: 'teal', title: 'Teal', thumail: '/screenshot/theme/iphone16/style_teal.png' }
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
    case 'iphone14':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/iphone14/style_default.png' },
        { name: 'red', title: 'Red', thumail: '/screenshot/theme/iphone14/style_red.png' },
        { name: 'blue', title: 'Blue', thumail: '/screenshot/theme/iphone14/style_blue.png' },
        { name: 'purple', title: 'Purple', thumail: '/screenshot/theme/iphone14/style_purple.png' }
      ]
    case 'iphoneSe':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/iphoneSe/style_default.png' },
      ]
    case 'huaweiP40ProPlus':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/huaweiP40ProPlus/style_default.png' }
      ]
    case 'samsungGalaxyWatch4':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/samsungGalaxyWatch4/style_default.png' },
        { name: 'gold', title: 'Gold', thumail: '/screenshot/theme/samsungGalaxyWatch4/style_gold.png' },
        { name: 'silver', title: 'Silver', thumail: '/screenshot/theme/samsungGalaxyWatch4/style_silver.png' }
      ]
    case 'iMacPro':
      return [
        { name: 'default', title: 'Default', thumail: '/screenshot/theme/iMacPro/style_default.png' }
      ]
    case 'minimalPhone':
      return [
        { name: 'default', title: '', thumail: '/screenshot/theme/minimalPhone/style_default.png' }
      ]
    case 'wallPaper':
      return [
        { name: 'default', title: '', thumail: '/screenshot/theme/wallPaper/style_default.png' },
        { name: 'handFemale', title: '', thumail: '/screenshot/theme/wallPaper/style_handFemale.png' }
      ]
    default:
      return [];
  }
}

export default function CoverTheme (props) {
  const { theme } = props.config.mockup;

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
      case 'iphone14':
        return <Iphone14 {...props} />
      case 'iphoneSe':
        return <IphoneSe {...props} />
      case 'huaweiP40ProPlus':
        return <HuaweiP40ProPlus {...props} />
      case 'samsungGalaxyWatch4':
        return <SamsungGalaxyWatch4 {...props} />
      case 'iMacPro':
        return <IMacPro {...props} />
      case 'minimalPhone':
        return <MinimalPhone {...props} />
      case 'iphone16':
        return <Iphone16 {...props} />
      case 'wallPaper':
        return <WallPaper {...props} />
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
