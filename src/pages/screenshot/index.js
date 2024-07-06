import { useEffect, useState } from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LeftSideBar from "./leftSideBar";
import RightSideBar from "./rightSideBar";
import Preview from "./preview";
import styles from "./style.module.scss";

export default function () {
  const { siteConfig } = useDocusaurusContext();

  const [config, setConfig] = useState({
    theme: "",
    picture: "",
    bgImg: "",
    borderRadius: 10,
    transparent: false,
    style: "",
    shadow: "",
    bg: "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)",
    noise: 0,
    blur: 0
  })

  const handleConfigChange = (val, key) => {
    setConfig((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <>
      <Head>
        <title>{`Screenshot | ${siteConfig.title}`}</title>
        <meta name="title" content='图片模型生成器' />
        <meta name="description" content="用模型帮你生成漂亮的图片" />
        <meta name="keywords" content='手机套壳,模型,图片美化' />
      </Head>
      <main className={styles.appMain}>
        <div className={styles.sidebar}>
          <LeftSideBar config={config} handleConfigChange={handleConfigChange} />
        </div>
        <div className={styles.canvas}>
          <div className={styles.safeArea}>
            <div
              id="previewFrame"
              className={styles.previewFrame}
              style={{ aspectRatio: "4 / 3" }}
            >
              <Preview config={config} handleConfigChange={handleConfigChange} transform={config.style} showBtn={true} />
            </div>
          </div>
        </div>
        <div className={styles.sidebar}>
          <RightSideBar config={config} handleConfigChange={handleConfigChange} />
        </div>
        <div className={styles.exportLayer}>
          <div id="captureCanvas" className={styles.frame}>
            <Preview config={config} handleConfigChange={handleConfigChange} showBtn={false} />
          </div>
        </div>
      </main>
    </>
  )
}
