import { createContext, useContext, useState, useMemo } from "react";

export const ConfigContext = createContext(null)

export function ConfigProvider({ children }) {
  const initConf = {
    id: Date.now(),
    mockup: {
      theme: "screenshot",
      title: "Screenshot",
      sizeInfo: "图片自适应大小",
      style: "default",
      thumbnail: "/screenshot/mockup/screenshot.png"
    },
    frame: {
      platform: "常用尺寸",
      aspectRatio: "3 : 4",
      sizeInfo: "1920 x 1440"
    },
    picture: "",
    picRatio: "1 / 1",
    bgImg: "",
    bgLayer: "",
    overLayerImg: "",
    overLayerOpacity: 0.4,
    borderRadius: 20,
    transparent: false, // 透明背景
    // style: "default", // 样式
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
    rotate: 0,
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

  const handleConfigMockupChange = (val) => {
    setConfig((prev) => ({ ...prev, mockup: { ...val }}));
  }

  const handleConfigFrameChange = (val) => {
    setConfig((prev) => ({ ...prev, frame: { ...val }}));
  }

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
      handleUseConfig,
      handleConfigMockupChange,
      handleConfigFrameChange
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
