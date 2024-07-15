import { createContext, useContext, useState, useMemo } from "react";

export const ConfigContext = createContext(null)

export function ConfigProvider({ children }) {
  const [config, setConfig] = useState({
    theme: "screenshot",
    picture: "",
    bgImg: "",
    borderRadius: 10,
    transparent: false,
    style: "",
    shadow: "",
    bg: "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)",
    ratio: '4 / 3',
    noise: 0,
    blur: 0,
    scale: 1,
    transformX: 0,
    transformY: 0,
    width: 1920,
    height: 1440,
    format: 'png',
    expScale: 1 // 导出图片分辨率
  })

  const handleConfigChange = (val, key) => {
    setConfig((prev) => ({ ...prev, [key]: val }));
  };

  const value = useMemo(
    () => ({
      config,
      handleConfigChange,
    }),
    [config],
  )

  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
}

export function useConfigContext() {
  const context = useContext(ConfigContext)
  if (!context) throw Error('Must be used within ConfigProvider')
  return context
}
