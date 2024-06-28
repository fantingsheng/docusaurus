import { useState } from 'react';
import Head from '@docusaurus/Head';
import LeftSideBar from "./leftSideBar";
import RightSideBar from "./rightSideBar";
import Preview from "./preview";
import styles from "./style.module.scss";

export default function () {
  const [config, setConfig] = useState({
    theme: "",
    picture: "",
    bgImg: "",
    borderRadius: 10,
    shadow: "",
    bgColor: "",
    bgGradient: ""
  })

  const handleConfigChange = (val, key) => {
    setConfig((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <>
      <Head>
        <meta name="title" content='图片模型生成器' />
        <meta name="description" content="用模型帮你生成漂亮的图片" />
        <meta name="keywords" content='手机套壳,模型,图片美化' />
      </Head>
      <main className={styles.appMain}>
        <div className={styles.sidebar}>
          <LeftSideBar config={config} handleConfigChange={handleConfigChange} />
        </div>
        <div className={styles.preview}>
          <Preview config={config} handleConfigChange={handleConfigChange} />
        </div>
        <div className={styles.sidebar}>
          <RightSideBar config={config} handleConfigChange={handleConfigChange} />
        </div>
      </main>
    </>
  )
}