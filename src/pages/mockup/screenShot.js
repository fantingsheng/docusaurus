import React from "react";

export default function ScreenShot ({ config }) {
  const { theme } = config;

	const selectTheme = (theme) => {
		switch (theme) {
			case 'normal':
        return <>cc</>;
		}
	};

  return (
    <>
      {selectTheme(theme)}
    </>
  )
}