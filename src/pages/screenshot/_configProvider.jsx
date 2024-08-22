import { createContext, useContext, useState, useMemo } from "react";

export const ConfigContext = createContext(null)

export function ConfigProvider({ children }) {
  const initConf = {
    id: Date.now(),
    theme: "screenshot",
    picture: "",
    picRatio: "1 / 1",
    bgImg: "",
    bgLayer: "",
    borderRadius: 10,
    transparent: false, // 透明背景
    style: "default", // 样式
    transform: "",
    shadowOpacity: 0.4,
    shadowX: 0.46875,
    shadowY: 0.65625,
    bg: "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)",
    ratio: '4 / 3',
    noise: 0,
    blur: 0,
    scale: 1,
    translateX: 0,
    translateY: 0,
    width: 1920,
    height: 1440,
    format: 'png',
    expScale: 1, // 导出图片分辨率
    hideMockup: false,
    url: 'https://spacexcode.com'
  };
  const [config, setConfig] = useState({
    ...initConf
  })

  const handleConfigChange = (val, key) => {
    setConfig((prev) => ({ ...prev, [key]: val }));
  };

  const handleResetConfig = () => {
    setConfig({ ...initConf })
  }

  const handleUseConfig = (config) => {
    setConfig((prev) => ({ ...prev, ...config }))
  }

  const value = useMemo(
    () => ({
      config,
      handleConfigChange,
      handleResetConfig,
      handleUseConfig
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
