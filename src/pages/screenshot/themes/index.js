import React from "react";

import Browser from "./browser";
import ScreenShot from "./screenShot";

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
