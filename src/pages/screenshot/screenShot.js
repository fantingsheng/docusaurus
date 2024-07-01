import React from "react";

export default function ScreenShot ({ config }) {
  const { theme } = config;

	const selectTheme = (theme) => {
		switch (theme) {
			case 'normal':
        return <img src={config.picture} />;
      default:
        return <img src={config.picture} />;
		}
	};

  return (
    <>
      {selectTheme(theme)}
    </>
  )
}
